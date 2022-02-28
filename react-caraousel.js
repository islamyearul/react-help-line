$ npm install react-multi-carousel --save

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
======================

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;

====================

Custom Arrows.
You can pass your own custom arrows to make it the way you want, the same for the position. For example, add media query for the arrows to go under when on smaller screens.

Your custom arrows will receive a list of props/state that's passed back by the carousel such as the currentSide, is dragging or swiping in progress.

Code

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};
<Carousel customRightArrow={<CustomRightArrow />} />;

============================

Custom button group.
This is very useful if you don't want the dots, or arrows and you want to fully customize the control functionality and styling yourself.

Code

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> // remember to give it position:absolute
      <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
    </div>
  );
};
<Carousel arrows={false} customButtonGroup={<ButtonGroup />}>
  <ItemOne>
  <ItemTwo>
</Carousel>

======================
renderButtonGroupOutside
Passing this props would render the button group outside of the Carousel container. This is done using React.fragment

<div className='my-own-custom-container'>
  <Carousel arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
    <ItemOne>
    <ItemTwo>
  </Carousel>
</div>

===================

Custom dots.
You can pass your own custom dots to replace the default one.

Custom dots can also be a copy or an image of your carousel item. See example in this one

The codes for this example

You custom dots will receive a list of props/state that's passed back by the carousel such as the currentSide, is dragging or swiping in progress.

Code

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};
<Carousel showDots customDot={<CustomDot />}>
  {carouselItems}
</Carousel>;
===============================
renderDotsOutside
Passing this props would render the dots outside of the Carousel container. This is done using React.fragment

<div className='my-own-custom-container'>
  <Carousel arrows={false} showDots={true} renderDotsOutside={renderButtonGroupOutside}>
    <ItemOne>
    <ItemTwo>
  </Carousel>
</div>
======================
centerMode
Shows the next items and previous items partially.

<Carousel centerMode={true} />
============
afterChange callback.
This is a callback function that is invoked each time when there has been a sliding.

<Carousel
  afterChange={(previousSlide, { currentSlide, onMove }) => {
    doSpeicalThing();
  }}
/>
========================
