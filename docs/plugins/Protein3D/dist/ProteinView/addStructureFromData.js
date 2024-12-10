// adapted from https://github.com/molstar/molstar/blob/ab4130d42d0ab2591f62460292ade0203207d4d2/src/apps/viewer/app.ts#L255C1-L259C6
export async function addStructureFromData({ data, format = 'pdb', options, plugin, }) {
    const _data = await plugin.builders.data.rawData({
        data,
        label: options?.dataLabel,
    });
    const trajectory = await plugin.builders.structure.parseTrajectory(_data, format);
    const model = await plugin.builders.structure.createModel(trajectory);
    await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'all-models', {
        useDefaultIfSingleModel: true,
        representationPresetParams: options?.representationParams,
    });
    return { model };
}
//# sourceMappingURL=addStructureFromData.js.map