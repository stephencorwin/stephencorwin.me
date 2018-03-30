import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';

import { NextBtn, PrevBtn, Image } from './styles';

export const ImageSlider = ({ images, className }) => (
	<section className={className}>
		<Slider
			nextArrow={<NextBtn icon={faChevronRight} />}
			prevArrow={<PrevBtn icon={faChevronLeft} />}
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
