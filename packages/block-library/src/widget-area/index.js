/**
 * External dependencies
 */
import { startCase } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';

const { name } = metadata;
export { metadata, name };

export const settings = {
	title: __( 'Widget Area' ),
	supports: {
		html: false,
		inserter: false,
	},
	//__experimentalLabel: ( { slug } ) => startCase( slug ),
	edit,
};
