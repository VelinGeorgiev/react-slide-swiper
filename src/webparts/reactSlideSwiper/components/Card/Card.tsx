require('./Card.css');
import * as React from 'react';
import { ListItem } from '../../ListItem';
import { ICardProps } from './ICardProps';

export default class Card extends React.Component<ICardProps, {}> {

  public render(): React.ReactElement<ICardProps> {
    return (
      <div className="card">
        <div>
            <img src={this.props.listItem.imageUrl} className="image" />
        </div>
        <h2 className="title">{this.props.listItem.title}</h2>
        <p className="description">{this.props.listItem.description}</p>
      </div>
    );
  }
}
