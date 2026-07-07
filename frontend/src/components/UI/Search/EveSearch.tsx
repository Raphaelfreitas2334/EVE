import "./EveSearch.css";

import { Search, X } from "lucide-react";
import { useState, type InputHTMLAttributes } from "react";

interface EveSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {

  onClear?: () => void;

}

const EveSearch = ({
  className = "",
  onClear,
  ...rest
}: EveSearchProps) => {

  const [value, setValue] = useState("");

  const clear = () => {

    setValue("");

    onClear?.();

  };

  return (

    <div className={`eve-search ${className}`}>

      <Search
        size={18}
        className="search-icon"
      />

      <input
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {value && (

        <button
          onClick={clear}
          className="clear-button"
          type="button"
        >

          <X size={16} />

        </button>

      )}

    </div>

  );

};

export default EveSearch;