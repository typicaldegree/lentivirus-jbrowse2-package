import React from 'react'
import { observer } from 'mobx-react'
import { LinearGenomeViewModel } from '@jbrowse/plugin-linear-genome-view'
import { getSession } from '@jbrowse/core/util'

// locals
import { JBrowsePluginProteinViewModel } from '../ProteinView/model'
import Highlight from './Highlight'

const ProteinToGenomeHoverHighlight = observer(function ({
  model,
}: {
  model: LinearGenomeViewModel
}) {
  const { assemblyManager, views } = getSession(model)
  const { assemblyNames } = model
  const proteinView = views.find(f => f.type === 'ProteinView') as
    | JBrowsePluginProteinViewModel
    | undefined
  const assemblyName = assemblyNames[0]!
  const assembly = assemblyManager.get(assemblyName)
  return assembly ? (
    <>
      {proteinView?.structures.map(structure =>
        structure.hoverGenomeHighlights.map((r, idx) => (
          <Highlight
            key={`${JSON.stringify(r)}-${idx}`}
            start={r.start}
            end={r.end}
            refName={r.refName}
            assemblyName={assemblyName}
            model={model}
          />
        )),
      )}
    </>
  ) : null
})

export default ProteinToGenomeHoverHighlight