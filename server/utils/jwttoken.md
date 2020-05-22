### https://www.jianshu.com/p/2036987a22fb
### 1、传统身份验证和JWT的身份验证
### 传统身份验证：
      HTTP 是一种没有状态的协议，也就是它并不知道是谁是访问应用。这里我们把用户看成是客户端，客户端使用用户名还有密码通过了身份验证，不过下回这个客户端再发送请求时候，还得再验证一下。
    解决的方法就是，当用户请求登录的时候，如果没有问题，我们在服务端生成一条记录，这个记录里可以说明一下登录的用户是谁，然后把这条记录的 ID 号发送给客户端，客户端收到以后把这个 ID 号存储在 Cookie 里，下次这个用户再向服务端发送请求的时候，可以带着这个 Cookie ，这样服务端会验证一个这个 Cookie 里的信息，看看能不能在服务端这里找到对应的记录，如果可以，说明用户已经通过了身份验证，就把用户请求的数据返回给客户端。
    上面说的就是 Session，我们需要在服务端存储为登录的用户生成的 Session ，这些 Session 可能会存储在内存，磁盘，或者数据库里。我们可能需要在服务端定期的去清理过期的 Session 。
### JWT的身份验证：
    使用基于 Token 的身份验证方法，在服务端不需要存储用户的登录记录。大概的流程是这样的：
    1、客户端使用用户名跟密码请求登录
    2、 服务端收到请求，去验证用户名与密码
    3、验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
    4、客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
    5、客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
    6、服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据


### 2、JWT的token组成

    实施 Token 验证的方法挺多的，还有一些标准方法，比如 JWT，读作：jot ，表示：JSON Web Tokens 。JWT 标准的 Token 有三个部分：
        header（头部）
        payload（数据）
        signature（签名）
    中间用点分隔开，并且都会使用 Base64 编码，所以真正的 Token 看起来像这样：
        eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuaW5naGFvLm5ldCIsImV4cCI6IjE0Mzg5NTU0NDUiLCJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlfQ.SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc

    头部：
        每个 JWT token 里面都有一个 header，也就是头部数据。里面包含了使用的算法，这个 JWT 是不是带签名的或者加密的。主要就是说明一下怎么处理这个 JWT token 。

        头部里包含的东西可能会根据 JWT 的类型有所变化，比如一个加密的 JWT 里面要包含使用的加密的算法。唯一在头部里面要包含的是 alg 这个属性，如果是加密的 JWT，这个属性的值就是使用的签名或者解密用的算法。如果是未加密的 JWT，这个属性的值要设置成 none。

    Payload：
        Payload 里面是 Token 的具体内容，这些内容里面有一些是标准字段，你也可以添加其它需要的内容。下面是标准字段：

        iss：Issuer，发行者
        sub：Subject，主题
        aud：Audience，观众
        exp：Expiration time，过期时间
        nbf：Not before
        iat：Issued at，发行时间
        jti：JWT ID
        比如下面这个 Payload ，用到了 iss 发行人，还有 exp 过期时间这两个标准字段。另外还有两个自定义的字段，一个是 name ，还有一个是 admin 。

