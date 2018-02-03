import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactSlideSwiperWebPartStrings';
import ReactSlideSwiper from './components/ReactSlideSwiper';
import { IReactSlideSwiperProps } from './components/IReactSlideSwiperProps';
import { IListServce } from './IListService';
import { ListMock } from './ListMock';

export interface IReactSlideSwiperWebPartProps {
  description: string;
}

export default class ReactSlideSwiperWebPart extends BaseClientSideWebPart<IReactSlideSwiperWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactSlideSwiperProps > = React.createElement(
      ReactSlideSwiper,
      {
        listService: new ListMock()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
