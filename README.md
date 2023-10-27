# Socicons - Icon Generation Library

Socicons is a versatile icon generation library that allows you to easily integrate icons of famous brands and tech stacks into your projects. With a simple and intuitive syntax, you can incorporate these icons seamlessly. 



Please note that socicons is continuously adding support for more icons, so make sure to check for updates regularly.

## How to Use

Using socicons in your project is straightforward. Follow these steps:

1. **Installation**:
   - You can install socicons via your preferred package manager. For example, with npm:
     ```
     npm install socicons
     ```
   - Or with yarn:
     ```
     yarn add socicons
     ```

2. **Importing**:
   - Import the library into your project where you want to use it.
     ```javascript
     import {Socicons} from 'socicons';
     ```

3. **Adding Icons**:
   - To add an icon to your project, use the `<socicons>` component with the `icon` attribute and specify the icon name.
     ```jsx
     <Socicons icon="facebook" />
     ```

## Example

Here's an example of how you can use socicons in your HTML or JSX code:

```jsx
import {Socicons} from 'socicons';

function MyComponent() {
  return (
    <div>
      <h1>Follow Us on Social Media</h1>
      <Socicons icon="facebook" />
      <Socicons icon="twitter" />
      <Socicons icon="instagram" />
      <Socicons icon="linkedin" />
    </div>
  );
}
 ```

## Customization

socicons allows you to customize the appearance of icons to better fit your project's design. While the library provides default styles, you can customize the size and color of the icons to match your specific requirements.

- **Size (Optional)**: You can adjust the size of the icons by providing size as props

- **Color (Optional)**: Customize the color of the icons by providing color as props

Here's an example of how to customize the size and color of an icon:

```jsx
import {Socicons} from 'socicons';

function MyComponent() {
  return (
    <div>
      <h1>Customized Icons</h1>
      <Socicons icon="facebook" size={40} color="#02055A" />
      <Socicons icon="twitter" size={40} color="#02055A" />
      <Socicons icon="instagram" size={40} color="#808080" />
    </div>
  );
}
 ```

## Supported Icons

Socicons supports a wide range of icons, including icons for famous brands and popular tech stacks. You can use these icons to enhance the visual appeal of your website or application. Here's a list of some of the supported icons along with their corresponding icon names:

- Airbnb (`airbnb`)
- Algolia (`algolia`)
- Amazon (`amazon`)
- Amazon Pay (`amazonpay`)
- Android (`android`)
- Angular (`angular`)
- Apple (`apple`)
- Apple Pay (`applepay`)
- Atlassian (`atlassian`)
- Behance (`behance`)
- Bitbucket (`bitbucket`)
- Bitcoin (`bitcoin`)
- BlackBerry (`blackberry`)
- Bootstrap (`bootstrap`)
- C (`c`)
- C++ (`cpp`)
- C# (`csharp`)
- Chrome (`chrome`)
- Chromecast (`chromecast`)
- Codeflare (`codeflare`)
- CodePen (`codepen`)
- CodeSandbox (`codesandbox`)
- CSS (`css`)
- Dart (`dart`)
- DeviantArt (`deviantart`)
- dev.to (`devto`)
- DigitalOcean (`digitalocean`)
- Discord (`discord`)
- Docker (`docker`)
- Dribbble (`dribble`)
- Edge (`edge`)
- Ember (`ember`)
- Ethereum (`ethereum`)
- Evernote (`evernote`)
- Express.js (`expressjs`)
- Facebook (`facebook`)
- Facebook Messenger (`facebookmessenger`)
- Figma (`figma`)
- Firebase (`firebase`)
- Firefox (`firefox`)
- FreeCodeCamp (`freecodecamp`)
- GitHub (`github`)
- Git (`git`)
- GitKraken (`gitkraken`)
- GitLab (`gitlab`)
- Google (`google`)
- Google Drive (`googledrive`)
- Google Pay (`gpay`)
- Google Plus (`googleplus`)
- Google Wallet (`googlewallet`)
- Google Play (`googleplay`)
- Gratipay (`gratipay`)
- HackerRank (`hackerrank`)
- Hashnode (`hashnode`)
- HTML (`html`)
- IMDb (`imdb`)
- Instagram (`instagram`)
- Intercom (`intercom`)
- Jira (`jira`)
- JSFiddle (`jsfiddle`)
- jQuery (`jquery`)
- Kotlin (`kotlin`)
- Kickstarter (`kicksarter`)
- LinkedIn (`linkedin`)
- Line (`line`)
- Linux (`linux`)
- Mail (`mail`)
- Mailchimp (`mailchimp`)
- Mastercard (`mastercard`)
- Meetup (`meetup`)
- Meta (`meta`)
- Microsoft (`microsoft`)
- MongoDB (`mongodb`)
- Next.js (`nextjs`)
- Node.js (`nodejs`)
- OpenID (`openid`)
- PayPal (`paypal`)
- Pinterest (`pininterest`)
- PlayStation (`playstation`)
- PostgreSQL (`postgress`)
- Postman (`postman`)
- ProductHunt (`producthunt`)
- Python (`python`)
- Quicksign (`quicksign`)
- React (`react`)
- Reddit (`reddit`)
- Ruby (`ruby`)
- Rust (`rust`)
- Safari (`safari`)
- Salesforce (`salesforce`)
- Shopify (`shopify`)
- Skype (`skype`)
- Slack (`slack`)
- Solidity (`solidity`)
- Spotify (`spotify`)
- Stack Overflow (`stackoverflow`)
- Steam (`steam`)
- Stripe (`stripe`)
- Supabase (`supabase`)
- Supple (`supple`)
- Tailwind CSS (`tailwindcss`)
- Telegram (`telegram`)
- Threads (`threads`)
- TikTok (`tiktok`)
- Tumblr (`tumblr`)
- Twitch (`twitch`)
- Twitter (`twitter`)
- Unsplash (`unsplash`)
- Unity (`unity`)
- Ubuntu (`ubuntu`)
- Vercel (`vercel`)
- Visa (`visa`)
- Vimeo (`vimeo`)
- Vue.js (`vuejs`)
- WhatsApp (`whatsapp`)
- Windows (`windows`)
- Wix (`wix`)
- X (`x`)
- Xbox (`xbox`)
- Yarn (`yarn`)
- Yelp (`yelp`)

Please note that this is not an exhaustive list, and socicons continues to add support for more icons. Make sure to check for updates regularly.


## Contributions
Socions is an open-source project, and contributions are welcome. If you'd like to add support for additional icons or improve the library, please submit a pull request on our GitHub repository.

License
Socions is released under the MIT License. See the LICENSE file for more details.

## Support
If you have any questions, issues, or feature requests, please create an issue on our GitHub repository or reach out to us at anuragsrivastav0027@gmail.com.

Thank you for choosing Socions for your icon needs!

Happy coding!