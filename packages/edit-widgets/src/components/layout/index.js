/**
 * WordPress dependencies
 */
import {
	DropZoneProvider,
	Popover,
	SlotFillProvider,
	FocusReturnProvider,
	Panel,
} from '@wordpress/components';
import {
	BlockEditorKeyboardShortcuts,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
	ButtonBlockerAppender,
	BlockList,
} from '@wordpress/block-editor';
import { useViewportMatch } from '@wordpress/compose';
import { InterfaceSkeleton } from '@wordpress/interface';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Header from '../header';
import Notices from '../notices';
import KeyboardShortcuts from '../keyboard-shortcuts';
import WidgetAreasBlockEditorProvider from '../widget-areas-block-editor-provider';

function Layout( { blockEditorSettings } ) {
	const isMobile = useViewportMatch( 'medium', '<' );

	return (
		<>
			<BlockEditorKeyboardShortcuts.Register />
			<KeyboardShortcuts.Register />
			<SlotFillProvider>
				<DropZoneProvider>
					<FocusReturnProvider>
						<WidgetAreasBlockEditorProvider
							blockEditorSettings={ blockEditorSettings }
						>
							<InterfaceSkeleton
								header={ <Header /> }
								sidebar={
									! isMobile && (
										<div className="edit-widgets-sidebar">
											<Panel
												header={ __( 'Block Areas' ) }
											>
												<BlockInspector
													showNoBlockSelectedMessage={
														false
													}
												/>
											</Panel>
										</div>
									)
								}
								content={
									<>
										<KeyboardShortcuts />
										<BlockEditorKeyboardShortcuts />
										<Notices />
										<Popover.Slot name="block-toolbar" />
										<div
											className="edit-widgets-layout__content"
											tabIndex="-1"
										>
											<div className="editor-styles-wrapper">
												<WritingFlow>
													<ObserveTyping>
														<BlockList className="edit-widgets-main-block-list" />
													</ObserveTyping>
												</WritingFlow>
											</div>
										</div>
									</>
								}
							/>
							<Popover.Slot />
						</WidgetAreasBlockEditorProvider>
					</FocusReturnProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</>
	);
}

export default Layout;
