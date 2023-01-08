COURSES_00 = {
  '1': ['Hello'],
  2: ['World'],
  3: {type: {home: 'semi-detached'}},
  4: {type: {home: 'detached'}},
  5: {type: 'home'}
}
some_obj_00 = {
  mark: 3,
  tony: 5,
  kevin: 22,
  frank: 10
}
some_obj_01 = {
  obj00: {1: ['Hello'], 2: ['World']},
  obj01: (name) => {return `hello ${name}`}
}
some_obj_02 = [1,2,3,4,5]

module.exports = {
  courses_00: COURSES_00,
  some_obj_00: some_obj_00,
  some_obj_01: some_obj_01,
  some_obj_02: some_obj_02
}
