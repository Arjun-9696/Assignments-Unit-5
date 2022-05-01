import { useState } from 'react';

export const Inventory = () => {
  const [books, setBooks] = useState(10);
  const [notebooks, setNotebooks] = useState(13)
  const [pens, setPens] = useState(40);
  const [inkpens,setInkpens] = useState(30);
  const [total,setTotal]= useState(books+notebooks+pens+inkpens)
  // Create add and remove functions here that changes the
  const addBooks = () => {
    setBooks(books + 1 );
    setTotal(total+1);
  };
  const deleteBooks = () => {
    setBooks(books - 1);
    setTotal(total - 1);
  };
  const addNoteBooks = () => {
    setNotebooks(notebooks + 1 );
    setTotal(total + 1);
  };
  const deleteNoteBooks = () => {
    setNotebooks(notebooks - 1);
    setTotal(total - 1);
  };
  const addPens = () => {
    setPens(pens + 1);
    setTotal(total + 1);
  };
    const deletePens = () => {
      setPens(pens - 1);
      setTotal(total - 1);
    };
      const addInkpens = () => {
        setInkpens(inkpens + 1);
        setTotal(total + 1);
      };
      const deleteInkpens = () => {
        setInkpens(inkpens - 1);
        setTotal(total - 1);
      };

  // state.
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '3px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={addBooks}>
          +
        </button>
        <button className="circlularButton" onClick={deleteBooks}>
          -
        </button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={addNoteBooks}>
          +
        </button>
        <button className="circlularButton" onClick={deleteNoteBooks}>
          -
        </button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={addPens}>
          +
        </button>
        <button className="circlularButton" onClick={deletePens}>
          -
        </button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={addInkpens}>
          +
        </button>
        <button className="circlularButton" onClick={deleteInkpens}>-</button>
        <span>{inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
