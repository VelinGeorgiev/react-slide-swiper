import { ListItem } from "./ListItem";
import { IListServce } from "./IListService";

export class ListMock implements IListServce {

    public getAll(): Promise<Array<ListItem>> {
      return new Promise<Array<ListItem>>((resolve:any) => {

        const fakeData: Array<ListItem> = [

            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            },
            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            },
            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            },
            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            },
            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            },
            {
                title: 'A convergent value empowers the standard-setters',
                description: 'The General Head of IT Strategy benchmarks business-for-business agilities',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'The Digital Marketers empower a digitized correlation',
                description: 'Whereas synchronized brand values promote strategy formulations',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/visual-studio-code/149d230b8e3bc8dc616c618906c733d4.jpg'
            },
            {
                title: 'The market thinker strategically standardizes a competitive success',
                description: 'The thinkers/planners benchmark a disciplined growth momentum',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/office365flask_app_8NXiOtW/8e251937a6277383d702481380738c3a.jpg'
            },
            {
                title: 'We are going to secure our cross-pollinations',
                description: 'We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success',
                imageUrl: 'https://blog.velingeorgiev.com/media/CACHE/images/posts/sharepoint-velin-georgiev/05fd42b96b4a3d23227e7d25952d7236.jpg'
            }
        ];

        resolve(fakeData);
      });
    }
}
  