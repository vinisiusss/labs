// 1
// export interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// export const users: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
// export function logPerson(user: User) {
//     console.log(`- ${user.name}, ${user.age}`);
// }
// console.log('Users:');
// users.forEach(logPerson);

// 2
// type Teacher = User & WithLevel & { courses: { [id: number]: Course & WithTeacherRole } };
// type Director = User & {
//     students: { [id: string]: Student };
//     teachers: { [id: string]: Teacher & WithRate };
// };

// 3
// function zip<T1, T2>(first: T1[], second: T2[]): Array<[T1, T2]>;
// function zip<T1, T2>(first: [T1], second: [T2]): Array<[T1, T2]>;
// function zip<T1, T2>(first: [T1, T1], second: [T2]): Array<[T1, T2]>;
// function zip<T1, T2>(first: T1[], second: T2[]): Array<[T1, T2]> {
//   const minLength = Math.min(first.length, second.length);
//   const result = [];
//   for (let i = 0; i < minLength; i++) {
//     result.push([first[i], second[i]])
//   }
//   return result
// }
// function groupBy<TSource, TKey, TValue>(source: TSource[], keySelector: (item: TSource, index: number) => TKey, valueSelector: (item: TSource, index: number) => TValue): Map<TKey, TValue[]>;
// function groupBy<TSource, TKey, TValue>(source: TSource[], keySelector: (item: TSource, index: number) => TKey, valueSelector: (item: TSource, index: number) => TValue): Map<TKey, TValue[]> {
//   const result = new Map<TKey, TValue[]>();
//   for (let i = 0; i < source.length; i++) {
//     const item = source[i];
//     const key = keySelector(item, i);
//     const value = valueSelector(item, i);
//     if (!result.has(key)) {
//       result.set(key, []);
//     }
//     result.get(key)!.push(value);
//   }

//   return result;
// }

// 4





// 5
