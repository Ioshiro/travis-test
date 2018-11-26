import request from './request';

export function getExamByID(examID){
  return request('/exams/' + examID).then(exam => exam.autore);
}
