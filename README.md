# Socions - Icon Generation Library

Socions is a versatile icon generation library that allows you to easily integrate icons of famous brands and tech stacks into your projects. With a simple and intuitive syntax, you can incorporate these icons seamlessly. 



Please note that Socions is continuously adding support for more icons, so make sure to check for updates regularly.

## How to Use

Using Socions in your project is straightforward. Follow these steps:

1. **Installation**:
   - You can install Socions via your preferred package manager. For example, with npm:
     ```
     npm install socions
     ```
   - Or with yarn:
     ```
     yarn add socions
     ```

2. **Importing**:
   - Import the library into your project where you want to use it.
     ```javascript
     import {Socions} from 'socions';
     ```

3. **Adding Icons**:
   - To add an icon to your project, use the `<Socions>` component with the `icon` attribute and specify the icon name.
     ```jsx
     <Socions icon="facebook" />
     ```

## Example

Here's an example of how you can use Socions in your HTML or JSX code:

```jsx
import Socions from 'socions';

function MyComponent() {
  return (
    <div>
      <h1>Follow Us on Social Media</h1>
      <Socions icon="facebook" />
      <Socions icon="twitter" />
      <Socions icon="instagram" />
      <Socions icon="linkedin" />
    </div>
  );
}
 ```

## Customization

Socions allows you to customize the appearance of icons to better fit your project's design. While the library provides default styles, you can customize the size and color of the icons to match your specific requirements.

- **Size (Optional)**: You can adjust the size of the icons by providing size as props

- **Color (Optional)**: Customize the color of the icons by providing color as props

Here's an example of how to customize the size and color of an icon:

```jsx
import Socions from 'socions';

function MyComponent() {
  return (
    <div>
      <h1>Customized Icons</h1>
      <Socions icon="facebook" size={40} color="#" />
      <Socions icon="twitter" style={{ fontSize: '1.5rem', color: 'green' }} />
      <Socions icon="instagram" style={{ fontSize: '1.5rem', color: 'purple' }} />
    </div>
  );
}
 ```

## Supported Icons

Socions supports a wide range of icons, including icons for famous brands and popular tech stacks. You can use these icons to enhance the visual appeal of your website or application. Here's a list of some of the supported icons along with their corresponding icon names:

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

Please note that this is not an exhaustive list, and Socions continues to add support for more icons. Make sure to check for updates regularly.
