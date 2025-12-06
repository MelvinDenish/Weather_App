import {Snowflake , Settings} from "lucide-react"
const Navbar = () => {
  return (
    <div>
        <div className="my-10 container max-w-full">
            <div className="flex flex-row justify-between gap-2">
              <div className="flex justify-between flex-row gap-2 ml-10">
                <Snowflake className="size-7"/>
                <div className="font-medium">
      
                  Whether Now
                </div>
                </div>
                <div className="justify-end mr-10">
                  <select className="select w-20 p-2">
                    <option value="" disabled hidden selected>
                      Units
                    </option>
                    <option value="Celcius"  className=" select-text" >Cel</option>
                    <option value="Darenheit"  className=" select-text">Faren</option>
                  </select>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar;