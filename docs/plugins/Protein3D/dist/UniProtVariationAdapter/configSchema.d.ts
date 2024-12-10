declare const UniProtVariationAdapter: import("@jbrowse/core/configuration/configurationSchema").ConfigurationSchemaType<{
    /**
     * #slot
     */
    location: {
        type: string;
        defaultValue: {
            uri: string;
            locationType: string;
        };
    };
    scoreField: {
        type: string;
        defaultValue: string;
    };
}, import("@jbrowse/core/configuration/configurationSchema").ConfigurationSchemaOptions<undefined, undefined>>;
export default UniProtVariationAdapter;
