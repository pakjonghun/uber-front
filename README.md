## uber-eats clone

## 인강 따라하기

## ect

- cookie : cors 는 배포시 be 에서 별도로 설정 필요

  ```
  const link = createHttpLink({
    uri: "http://localhost:8000/graphql",
    credentials: "include",
  });
  ```

- enum 은 반복문으로 돌릴수도 있다.. 몰랐는데 ㅋㅋ

## useform

- watch(name) name 만 watch 할수 있다. 없으면 전부다 watch 한다.
- error type 은 errorField 다
- message 커스텀은 메세지 타입이 없더라고 메세지를 리턴만 해도 된다.

```
//message === "invalid"
validate:(value:number)=>value>200||"invalid
```

- global error 타입 설정

```

//일단 에러 타입을 하나 만든다.(글로벌로 사용할 용도)
interface Form{
  error?:string
}

//이 타입을 오로지 글로벌하게 에러는 설정할때만 사용한다.
useForm<Form>()

//글로벌 에러 가 발생하면 error 네임에 에러메세지를 세팅한다.
valide:(value)=>{
  if(error){
    setError('error',{message:'globalError'})
  }
}


```
