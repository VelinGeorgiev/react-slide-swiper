require('./ReactSlideSwiper.css');
import * as React from 'react';
//import styles from './ReactSlideSwiper.module.scss';
import { IReactSlideSwiperProps } from './IReactSlideSwiperProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReactSlideSwiperState } from './IReactSlideSwiperState';
import { ListItem } from '../ListItem';
import Card from './Card/Card';

const Swiper = require('../../swiper/swiper.min');

export default class ReactSlideSwiper extends React.Component<IReactSlideSwiperProps, IReactSlideSwiperState> {

  constructor(props:IReactSlideSwiperProps){
    super(props);

    this.state = {listItems: []};
  }

  public componentDidMount() {

    
    this.props.listService.getAll().then((result:Array<ListItem>) => {
      this.setState((prevState: IReactSlideSwiperState) => {
        prevState.listItems = result;
        return prevState;
      });
      
      // Make it swipe.
      new Swiper(".swiper-container", {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }
      });
    });
  }

  public render(): React.ReactElement<IReactSlideSwiperProps> {
    return (
      <div className="reactSlideSwiper_123">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.state.listItems.length && 
            this.state.listItems.map((listItem, i) => {
              return <div className="swiper-slide">
                      <Card listItem={listItem} key={i} />
                    </div>;
            })}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      </div>
    );
  }
}
