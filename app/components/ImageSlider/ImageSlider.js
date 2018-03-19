import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { NextBtn, PrevBtn, Image } from './styles';

export const ImageSlider = ({ images, className }) => (
	<section className={className}>
		<Slider
			nextArrow={<NextBtn icon="fa fa-chevron-right" />}
			prevArrow={<PrevBtn icon="fa fa-chevron-left" />}
		>
			<For each="item" of={images}>
				<Image style={{ backgroundImage: `url('${item}')` }} key={item} />
			</For>
		</Slider>
	</section>
);

ImageSlider.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string),
	className: PropTypes.string
};

ImageSlider.defaultProps = {
	images: [],
	className: ''
};

export default ImageSlider;
