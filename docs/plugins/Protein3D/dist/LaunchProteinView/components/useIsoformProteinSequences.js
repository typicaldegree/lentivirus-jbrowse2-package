import { useEffect, useState } from 'react';
// locals
import { getTranscriptFeatures } from './util';
import { fetchProteinSeq } from './calculateProteinSequence';
export default function useIsoformProteinSequences({ feature, view, }) {
    const [error, setError] = useState();
    const [isoformSequences, setIsoformSequences] = useState();
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        ;
        (async () => {
            try {
                setLoading(true);
                const ret = [];
                for (const f of getTranscriptFeatures(feature)) {
                    const seq = await fetchProteinSeq({ view, feature: f });
                    if (seq) {
                        ret.push([f.id(), { feature: f, seq }]);
                    }
                }
                setIsoformSequences(Object.fromEntries(ret));
            }
            catch (e) {
                console.error(e);
                setError(e);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [feature, view]);
    return { isLoading, isoformSequences, error };
}
//# sourceMappingURL=useIsoformProteinSequences.js.map