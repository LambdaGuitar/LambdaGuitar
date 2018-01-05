# Documentation for Lambda Guitar

### Tabs

| +/- | Command  | Path                             | Description                                         | Return Type |
| --- | -------- | -------------------------------- | --------------------------------------------        | ----------- |
| +   | [GET]    | 'api/tabs/artist/:query'         | Returns all songs by artist                         | Object      |
| +   | [GET]    | 'api/tabs/song/:query'           | Returns all songs with query term                   | Object      |
| +   | [POST]   | 'api/tabs/url/'                  | Returns tabs by specific url                        | Object      |
| +   | [GET]    | 'api/tabs/:artist/:song'         | Returns all songs sharing same :artist and :song    | Object      |
