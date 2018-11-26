const exams = {
  1: {
    deadline: '2018-12-25T09:00:00Z',
    destinatario: 123,
    autore: 'Prof. Paolo Gialli'
  }
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const examID = parseInt(url.substr('/exams/'.length), 10);
    process.nextTick(() =>
      exams[examID]
        ? resolve(exams[examID])
        : reject({
            error: 'Exam with ' + examID + ' not found.',
          }),
    );
  });
}
