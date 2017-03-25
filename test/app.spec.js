import $ from 'jquery'
import UsersRequest from 'users/UsersRequest'
import assert from 'power-assert'

describe('UsersRequest unit test group.', () => {

  it('Users のレスポンスを受け取ることができる', () => {
    const request = new UsersRequest().fetch()
    request.done((data)=>{
      assert($.isArray(data))
    })
  })

})