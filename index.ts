type Draggable ={
    draggable : () => void
};

type Resizable ={
    resize : () => void
};

type UIWidget = Draggable & Resizable;

let textbox: UIWidget = {

    draggable : () => {},
    resize : () => {}
  };
