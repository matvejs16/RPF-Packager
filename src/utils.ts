import moment from 'moment';

export const generateContentXml = (name: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<CDataFileMgr__ContentsOfDataFileXml>
	<disabledFiles />
	<includedXmlFiles />
	<includedDataFiles />
	<dataFiles>

<!-- maps props rpfs-->
	
	<Item>
		<filename>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_props.rpf</filename>
		<fileType>RPF_FILE</fileType>
		<disabled value="true"/>
		<persistent value="true"/>
		<overlay value="true"/>
	</Item>
	
<!-- maps meta rpfs -->
	
	<Item>
		<filename>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_meta.rpf</filename>
		<fileType>RPF_FILE</fileType>
		<disabled value="true"/>
		<persistent value="true"/>
		<overlay value="true"/>
		<contents>CONTENTS_DLC_MAP_DATA</contents>
	</Item>
	
<!-- interior props -->

	<Item>
		<filename>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_props.rpf</filename>
		<fileType>RPF_FILE</fileType>
		<disabled value="true"/>
		<persistent value="true"/>
		<overlay value="true"/>
	</Item>
	
<!-- interior meta -->

	<Item>
		<filename>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_meta.rpf</filename>
		<fileType>RPF_FILE</fileType>
		<disabled value="true"/>
		<persistent value="true"/>
		<overlay value="true"/>
		<contents>CONTENTS_DLC_MAP_DATA</contents>
	</Item>

	</dataFiles>
	<contentChangeSets>
		<Item>
	      <changeSetName>${name.toUpperCase()}_MAP</changeSetName>
	      <mapChangeSetData>
	        <Item>
	          <associatedMap>MO_JIM_L11</associatedMap>
	          <filesToInvalidate />
	          <filesToEnable>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_props.rpf</Item>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_meta.rpf</Item>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_props.rpf</Item>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_meta.rpf</Item>
	          </filesToEnable>
	        </Item>
	      </mapChangeSetData>
		  <requiresLoadingScreen value="true"/>
	      <loadingScreenContext>LOADINGSCREEN_CONTEXT_LAST_FRAME</loadingScreenContext>
	      <useCacheLoader value="true"/>
	    </Item>
	</contentChangeSets>
    <patchFiles />
</CDataFileMgr__ContentsOfDataFileXml>`;

export const generateSetupXml = (name: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<SSetupData>
	<deviceName>dlc_${name}</deviceName>
	<datFile>content.xml</datFile>
	<timeStamp>${moment().format('DD/MM/YYYY HH:mm')}</timeStamp>
	<nameHash>${name}</nameHash>
	<contentChangeSets />
	<contentChangeSetGroups>
		<Item>
	      <NameHash>GROUP_MAP</NameHash>
	      <ContentChangeSets>
	        <Item>${name.toUpperCase()}_MAP</Item>
	      </ContentChangeSets>
	    </Item>
	</contentChangeSetGroups>
	<startupScript />
	<scriptCallstackSize value="0" />
	<type>EXTRACONTENT_COMPAT_PACK</type>
	<order value="1005" />
	<minorOrder value="0" />
	<isLevelPack value="false" />
	<dependencyPackHash />
	<requiredVersion />
	<subPackCount value="0" />
</SSetupData>`;
