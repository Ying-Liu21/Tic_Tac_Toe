export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export const isBoardFull = squares => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    }
  }

  return true;
};

export const toMatrix = (arr, row) => {
  let matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < arr.length; i++) {
    if (i % row === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(arr[i]);
  }

  return matrix;
};

export const toList = arr => {
  let arrs = [].concat(...arr);

  return arrs;
};

export const getNextMove = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }

  return;
};

export const emailIsValid = email => {
  console.log(email);
  const re = /(.+)@(.+){2,}\.(.+){2,}/;
  return re.test(email);
};

export const retrieveToken = () => {
  let token = sessionStorage.getItem("token");

  return token;
};
