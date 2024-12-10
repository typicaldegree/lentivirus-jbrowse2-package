import { BaseFeatureDataAdapter, } from '@jbrowse/core/data_adapters/BaseAdapter';
import { openLocation } from '@jbrowse/core/util/io';
import { ObservableCreate } from '@jbrowse/core/util/rxjs';
import { doesIntersect2, SimpleFeature, } from '@jbrowse/core/util';
export default class UniProtVariationAdapter extends BaseFeatureDataAdapter {
    static capabilities = ['getFeatures', 'getRefNames'];
    feats;
    async loadDataP() {
        const { features } = JSON.parse(await openLocation(this.getConf('location')).readFile('utf8'));
        const scoreField = this.getConf('scoreField');
        return features.map(({ begin, end, ...rest }, idx) => ({
            ...rest,
            uniqueId: `feat-${idx}`,
            start: +begin,
            end: +end + 1,
            score: scoreField === 'population_frequency'
                ? rest.populationFrequencies?.[0]?.frequency
                : scoreField === 'variant_impact_score'
                    ? rest.predictions?.[0]?.score
                    : undefined,
            description: rest.descriptions?.map(d => d.value).join(','),
            name: [
                rest.mutatedType
                    ? `${rest.wildType}->${rest.mutatedType}`
                    : `${rest.wildType}->del`,
            ],
        }));
    }
    async loadData(_opts = {}) {
        if (!this.feats) {
            this.feats = this.loadDataP().catch((e) => {
                this.feats = undefined;
                throw e;
            });
        }
        return this.feats;
    }
    async getRefNames(_opts = {}) {
        return [];
    }
    getFeatures(query, opts = {}) {
        return ObservableCreate(async (observer) => {
            const { start, end, refName } = query;
            const data = await this.loadData();
            for (const f of data) {
                if (doesIntersect2(f.start, f.end, start, end)) {
                    observer.next(new SimpleFeature({ ...f, refName }));
                }
            }
            observer.complete();
        }, opts.signal);
    }
    freeResources() { }
}
//# sourceMappingURL=UniProtVariationAdapter.js.map