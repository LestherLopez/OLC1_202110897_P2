import { Graphviz } from 'graphviz-react';
import React from 'react';
function GraphAST({dot}) {

   
    return <Graphviz dot={dot} options={{ engine:"dot"}}/>
    
};

export default GraphAST;