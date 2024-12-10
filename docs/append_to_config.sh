#!/bin/bash

CONFIG_FILE="docs/config.json"

APPEND_TEXT='{
  "type": "CustomTrack",
  "trackId": "HIV1-Protein-Structure",
  "name": "HIV-1 Protein Structure",
  "assemblyNames": ["HIV-1 Genome"],
  "category": ["Protein Structures"],
  "configuration": {
    "customHtml": "<a href=\"hiv1_protein.pdb\" target=\"_blank\">View 
HIV-1 Protein (PDB)</a>"
  }
},
{
  "type": "CustomTrack",
  "trackId": "HIV2-Protein-Structure",
  "name": "HIV-2 Protein Structure",
  "assemblyNames": ["HIV-2 Genome"],
  "category": ["Protein Structures"],
  "configuration": {
    "customHtml": "<a href=\"hiv2_protein.pdb\" target=\"_blank\">View 
HIV-2 Protein (PDB)</a>"
  }
},
{
  "type": "CustomTrack",
  "trackId": "SIV-Protein-Structure",
  "name": "SIV Protein Structure",
  "assemblyNames": ["SIV Genome"],
  "category": ["Protein Structures"],
  "configuration": {
    "customHtml": "<a href=\"siv_protein.pdb\" target=\"_blank\">View SIV 
Protein (PDB)</a>"
  }
}'

sed -i '' "/]$/{
i\\
$APPEND_TEXT
}" "$CONFIG_FILE"
