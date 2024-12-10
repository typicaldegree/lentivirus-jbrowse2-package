import { BaseFeatureDataAdapter, } from '@jbrowse/core/data_adapters/BaseAdapter';
import { openLocation } from '@jbrowse/core/util/io';
import { ObservableCreate } from '@jbrowse/core/util/rxjs';
import { doesIntersect2, SimpleFeature, } from '@jbrowse/core/util';
export default class AlphaFoldConfidenceAdapter extends BaseFeatureDataAdapter {
    static capabilities = ['getFeatures', 'getRefNames'];
    feats;
    async loadDataP() {
        const scores = JSON.parse(await openLocation(this.getConf('location')).readFile('utf8'));
        return scores.residueNumber.map((value, idx) => ({
            uniqueId: `feat-${idx}`,
            start: value,
            end: value + 1,
            score: scores.confidenceScore[idx],
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
//# sourceMappingURL=AlphaFoldConfidenceAdapter.js.map