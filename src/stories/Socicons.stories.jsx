
import { Socicons } from "../index";
import { icons } from "../lib/icons";

export default {
    component: Socicons,
  };
export const SociconsExample=
{
     render :()=>(
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px",justifyContent:"center",alignItems:"center"}}>
              {
                   icons.map((icon) => <Socicons icon={icon} size={50}/>)
              }
        </div>
     )
}