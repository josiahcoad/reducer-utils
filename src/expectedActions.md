These are the sample actions that these reducers are designed to catch

```js
// LOADING
{
  type: 'GET_USER_LOADING',
  payload: {
    params: { name: 'Officer Barbrady' },
    url: '/users'
  }
}

// SUCCESS (when json: true)
{
  type: 'GET_USER_SUCCESS',
  payload: {
    params: { name: 'Officer Barbrady' },
    url: '/users',
    data: {
        id: 1,
        name: 'Officer Barbrady'
    }
  }
}

// FAILURE (when json: true)
{
  type: 'GET_USER_FAILURE',
  payload: {
    params: { name: 'Officer Barbrady' },
    url: '/users',
    data: {
        message: 'Failed to fetch',
        stack: 'TypeError: Failed to fetch',
    }
  }
}
```