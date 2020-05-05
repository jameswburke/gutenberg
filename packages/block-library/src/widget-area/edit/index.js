/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { EntityProvider } from '@wordpress/core-data';
import { Panel, PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import WidgetAreaInnerBlocks from './inner-blocks';

export default function WidgetAreaEdit( { className, attributes: { id } } ) {
	const widgetAreaName = useSelect(
		( select ) => {
			const { getEditedEntityRecord } = select( 'core' );
			const widgetArea = getEditedEntityRecord(
				'root',
				'widgetArea',
				id
			);
			return widgetArea && widgetArea.name;
		},
		[ id ]
	);
	return (
		<Panel className={ className }>
			<PanelBody title={ widgetAreaName } initialOpen={ true }>
				<EntityProvider kind="root" type="widgetArea" id={ id }>
					<WidgetAreaInnerBlocks />
				</EntityProvider>
			</PanelBody>
		</Panel>
	);
}
