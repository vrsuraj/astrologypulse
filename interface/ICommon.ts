// comomon data structure
export interface IFetchData{
     type: string,
        id: string,
        label: string,
        config:{[key: string]: any };
        variants:{[key: string]: any };
        currentVariant?:string;
        components?:any

}

// common component object
export interface ICommonComponentObject {
  id: number;
  type: string;
  label: string;
  props: {
    [key: string]: {
      input_type: string;
      card_length?:number;
      value: any;
      hidden: boolean;
      options?: Array<{
        label: string;
        value: string | boolean;
      }>;
    };
  };
}