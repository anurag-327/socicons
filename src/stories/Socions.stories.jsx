
import { Socions } from "../index";

// export default {
//   title:"Socions"
// };

export default {
    component: Socions,
    tags: ["autodocs"],
  };

  let arr=["github","gitlab","bitbucket","linkedin","meta","twitter","x","telegram","apple","facebook","facebookmessenger","instagram","threads","whatsapp","google","googleplay","gpay","googleplus","googlewallet","googledrive","googlewallet","googledrive","amazon","aws","blackberry","tiktok","spotify","microsoft","discord","mail","atlassian","wordpress","freecodecamp","slack","figma","stripe","algolia","docker","codesandbox","windows","paypal","stackoverflow","kicksarter","steam","dribble","dropbox","shopify","codepen","airbnb","vimeo","codeflare","safari","reddit","wix","line","behance","skype","producthunt","salesforce","visa","mastercard","applepay","pininterest","supple","meetup","twitch","playstation","html","css","tailwindcss","javascript","typescript","cpp","csharp","c","ruby","kotlin","jquery","nextjs","vercel","postman","graphql","mongodb","postgress","mysql","firebase","supabase","appwrite","quicksign","redux","dart","solidity","bootstrap","linux","java","python","angular","vuejs","nodejs","expressjs","react","rust","php","swift","tumblr","jsfiddle","yelp","yarn","git","ubuntu","gitkraken","digitalocean","gratipay","mailchimp","jira","imdb","hashnode","hackerrank","firefox","chrome","evernote","ember","edge","ethereum","bitcoin","deviantart","devto","amazonpay","appstore","chromecast","fontawesome","squarespace","android","intercom","openid","xbox","unsplash","unity"]
export const SociconsExample=
{
     render :()=>(
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px",justifyContent:"center",alignItems:"center"}}>
               {
                      arr.map((data) => <Socions icon={data} size={100} />)
               }
               <Socions icon="jjj" size={100} />
               
        </div>
     )
}