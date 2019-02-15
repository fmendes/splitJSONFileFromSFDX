# splitJSONFileFromSFDX
Node script/command to split JSON file obtained from sfdx force:data:tree:export into 200 record chunks

USAGE: 
    node ./split-json.js filename.json
    
When you export a hierarchical data file using sfdx force:data:tree:export that has more than 200 records, you can use this script to split it into several numbered files.

This should allow you to import all the separate files after you edit the filename references in the "-plan.json" file and use sfdc force:data:tree:import
