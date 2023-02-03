import React from "react";

export interface buttonType {
     className?: string;
	 type : 'submit' | 'reset' | 'button' | undefined;
	 children : React.ReactNode;
	 [x: string]: any;
}

export interface marketNavTypes {
	showMarket : boolean,
	
}