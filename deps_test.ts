import {
   assert,
   assertArrayIncludes,
   assertEquals,
   assertStringIncludes,
   fail,
} from './deps.ts'

Deno.test('Assert functions should work as expected and did not break after update', () => {
   const testString = '123'
   if (testString) {
      assert(testString)
   } else {
      fail('Should not reach here!')
   }

   assertEquals(testString, '123')
   assertStringIncludes(testString, '12')

   const testArray: Array<string> = ['red', 'green', 'yellow']
   assertArrayIncludes<string>(testArray, ['red'])
})
