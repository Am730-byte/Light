
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model SetLog
 * 
 */
export type SetLog = $Result.DefaultSelection<Prisma.$SetLogPayload>
/**
 * Model WorkoutSession
 * 
 */
export type WorkoutSession = $Result.DefaultSelection<Prisma.$WorkoutSessionPayload>
/**
 * Model SessionExercise
 * 
 */
export type SessionExercise = $Result.DefaultSelection<Prisma.$SessionExercisePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserType: {
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const ExerciseType: {
  Cardio: 'Cardio',
  Strength: 'Strength'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]


export const EquipmentType: {
  Barbell: 'Barbell',
  Dumbbell: 'Dumbbell',
  Machine: 'Machine'
};

export type EquipmentType = (typeof EquipmentType)[keyof typeof EquipmentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type ExerciseType = $Enums.ExerciseType

export const ExerciseType: typeof $Enums.ExerciseType

export type EquipmentType = $Enums.EquipmentType

export const EquipmentType: typeof $Enums.EquipmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setLog`: Exposes CRUD operations for the **SetLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetLogs
    * const setLogs = await prisma.setLog.findMany()
    * ```
    */
  get setLog(): Prisma.SetLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutSession`: Exposes CRUD operations for the **WorkoutSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutSessions
    * const workoutSessions = await prisma.workoutSession.findMany()
    * ```
    */
  get workoutSession(): Prisma.WorkoutSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionExercise`: Exposes CRUD operations for the **SessionExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionExercises
    * const sessionExercises = await prisma.sessionExercise.findMany()
    * ```
    */
  get sessionExercise(): Prisma.SessionExerciseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Exercise: 'Exercise',
    SetLog: 'SetLog',
    WorkoutSession: 'WorkoutSession',
    SessionExercise: 'SessionExercise'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "exercise" | "setLog" | "workoutSession" | "sessionExercise"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      SetLog: {
        payload: Prisma.$SetLogPayload<ExtArgs>
        fields: Prisma.SetLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          findFirst: {
            args: Prisma.SetLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          findMany: {
            args: Prisma.SetLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          create: {
            args: Prisma.SetLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          createMany: {
            args: Prisma.SetLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          delete: {
            args: Prisma.SetLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          update: {
            args: Prisma.SetLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          deleteMany: {
            args: Prisma.SetLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>[]
          }
          upsert: {
            args: Prisma.SetLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLogPayload>
          }
          aggregate: {
            args: Prisma.SetLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetLog>
          }
          groupBy: {
            args: Prisma.SetLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetLogCountArgs<ExtArgs>
            result: $Utils.Optional<SetLogCountAggregateOutputType> | number
          }
        }
      }
      WorkoutSession: {
        payload: Prisma.$WorkoutSessionPayload<ExtArgs>
        fields: Prisma.WorkoutSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findFirst: {
            args: Prisma.WorkoutSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          findMany: {
            args: Prisma.WorkoutSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          create: {
            args: Prisma.WorkoutSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          createMany: {
            args: Prisma.WorkoutSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          delete: {
            args: Prisma.WorkoutSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          update: {
            args: Prisma.WorkoutSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutSessionPayload>
          }
          aggregate: {
            args: Prisma.WorkoutSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutSession>
          }
          groupBy: {
            args: Prisma.WorkoutSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutSessionCountAggregateOutputType> | number
          }
        }
      }
      SessionExercise: {
        payload: Prisma.$SessionExercisePayload<ExtArgs>
        fields: Prisma.SessionExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          findFirst: {
            args: Prisma.SessionExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          findMany: {
            args: Prisma.SessionExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>[]
          }
          create: {
            args: Prisma.SessionExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          createMany: {
            args: Prisma.SessionExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>[]
          }
          delete: {
            args: Prisma.SessionExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          update: {
            args: Prisma.SessionExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          deleteMany: {
            args: Prisma.SessionExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>[]
          }
          upsert: {
            args: Prisma.SessionExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionExercisePayload>
          }
          aggregate: {
            args: Prisma.SessionExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionExercise>
          }
          groupBy: {
            args: Prisma.SessionExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<SessionExerciseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    exercise?: ExerciseOmit
    setLog?: SetLogOmit
    workoutSession?: WorkoutSessionOmit
    sessionExercise?: SessionExerciseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workout: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | UserCountOutputTypeCountWorkoutArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    SessionExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SessionExercises?: boolean | ExerciseCountOutputTypeCountSessionExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountSessionExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionExerciseWhereInput
  }


  /**
   * Count Type WorkoutSessionCountOutputType
   */

  export type WorkoutSessionCountOutputType = {
    exercises: number
  }

  export type WorkoutSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutSessionCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSessionCountOutputType
     */
    select?: WorkoutSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutSessionCountOutputType without action
   */
  export type WorkoutSessionCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionExerciseWhereInput
  }


  /**
   * Count Type SessionExerciseCountOutputType
   */

  export type SessionExerciseCountOutputType = {
    sets: number
  }

  export type SessionExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | SessionExerciseCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * SessionExerciseCountOutputType without action
   */
  export type SessionExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExerciseCountOutputType
     */
    select?: SessionExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionExerciseCountOutputType without action
   */
  export type SessionExerciseCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.UserRole | null
    type: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    role: $Enums.UserRole | null
    type: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    userName: number
    email: number
    password: number
    createdAt: number
    role: number
    type: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    userName: string
    email: string
    password: string
    createdAt: Date
    role: $Enums.UserRole
    type: $Enums.UserType
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    type?: boolean
    workout?: boolean | User$workoutArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userName" | "email" | "password" | "createdAt" | "role" | "type", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | User$workoutArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workout: Prisma.$WorkoutSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userName: string
      email: string
      password: string
      createdAt: Date
      role: $Enums.UserRole
      type: $Enums.UserType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends User$workoutArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly type: FieldRef<"User", 'UserType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workout
   */
  export type User$workoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    cursor?: WorkoutSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ExerciseType | null
    slug: string | null
    equipment: $Enums.EquipmentType | null
    instructions: string | null
    createdAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ExerciseType | null
    slug: string | null
    equipment: $Enums.EquipmentType | null
    instructions: string | null
    createdAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    type: number
    slug: number
    equipment: number
    instructions: number
    createdAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    slug?: true
    equipment?: true
    instructions?: true
    createdAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    slug?: true
    equipment?: true
    instructions?: true
    createdAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    slug?: true
    equipment?: true
    instructions?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions: string | null
    createdAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    slug?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
    SessionExercises?: boolean | Exercise$SessionExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    slug?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    slug?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    slug?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "slug" | "equipment" | "instructions" | "createdAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SessionExercises?: boolean | Exercise$SessionExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      SessionExercises: Prisma.$SessionExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ExerciseType
      slug: string
      equipment: $Enums.EquipmentType
      instructions: string | null
      createdAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SessionExercises<T extends Exercise$SessionExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$SessionExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly type: FieldRef<"Exercise", 'ExerciseType'>
    readonly slug: FieldRef<"Exercise", 'String'>
    readonly equipment: FieldRef<"Exercise", 'EquipmentType'>
    readonly instructions: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.SessionExercises
   */
  export type Exercise$SessionExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    where?: SessionExerciseWhereInput
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    cursor?: SessionExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionExerciseScalarFieldEnum | SessionExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model SetLog
   */

  export type AggregateSetLog = {
    _count: SetLogCountAggregateOutputType | null
    _avg: SetLogAvgAggregateOutputType | null
    _sum: SetLogSumAggregateOutputType | null
    _min: SetLogMinAggregateOutputType | null
    _max: SetLogMaxAggregateOutputType | null
  }

  export type SetLogAvgAggregateOutputType = {
    weight: number | null
    set: number | null
    rep: number | null
  }

  export type SetLogSumAggregateOutputType = {
    weight: number | null
    set: number | null
    rep: number | null
  }

  export type SetLogMinAggregateOutputType = {
    id: string | null
    sessionExerciseId: string | null
    weight: number | null
    set: number | null
    rep: number | null
  }

  export type SetLogMaxAggregateOutputType = {
    id: string | null
    sessionExerciseId: string | null
    weight: number | null
    set: number | null
    rep: number | null
  }

  export type SetLogCountAggregateOutputType = {
    id: number
    sessionExerciseId: number
    weight: number
    set: number
    rep: number
    _all: number
  }


  export type SetLogAvgAggregateInputType = {
    weight?: true
    set?: true
    rep?: true
  }

  export type SetLogSumAggregateInputType = {
    weight?: true
    set?: true
    rep?: true
  }

  export type SetLogMinAggregateInputType = {
    id?: true
    sessionExerciseId?: true
    weight?: true
    set?: true
    rep?: true
  }

  export type SetLogMaxAggregateInputType = {
    id?: true
    sessionExerciseId?: true
    weight?: true
    set?: true
    rep?: true
  }

  export type SetLogCountAggregateInputType = {
    id?: true
    sessionExerciseId?: true
    weight?: true
    set?: true
    rep?: true
    _all?: true
  }

  export type SetLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLog to aggregate.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetLogs
    **/
    _count?: true | SetLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetLogMaxAggregateInputType
  }

  export type GetSetLogAggregateType<T extends SetLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSetLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetLog[P]>
      : GetScalarType<T[P], AggregateSetLog[P]>
  }




  export type SetLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetLogWhereInput
    orderBy?: SetLogOrderByWithAggregationInput | SetLogOrderByWithAggregationInput[]
    by: SetLogScalarFieldEnum[] | SetLogScalarFieldEnum
    having?: SetLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetLogCountAggregateInputType | true
    _avg?: SetLogAvgAggregateInputType
    _sum?: SetLogSumAggregateInputType
    _min?: SetLogMinAggregateInputType
    _max?: SetLogMaxAggregateInputType
  }

  export type SetLogGroupByOutputType = {
    id: string
    sessionExerciseId: string
    weight: number
    set: number
    rep: number
    _count: SetLogCountAggregateOutputType | null
    _avg: SetLogAvgAggregateOutputType | null
    _sum: SetLogSumAggregateOutputType | null
    _min: SetLogMinAggregateOutputType | null
    _max: SetLogMaxAggregateOutputType | null
  }

  type GetSetLogGroupByPayload<T extends SetLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetLogGroupByOutputType[P]>
            : GetScalarType<T[P], SetLogGroupByOutputType[P]>
        }
      >
    >


  export type SetLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionExerciseId?: boolean
    weight?: boolean
    set?: boolean
    rep?: boolean
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionExerciseId?: boolean
    weight?: boolean
    set?: boolean
    rep?: boolean
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionExerciseId?: boolean
    weight?: boolean
    set?: boolean
    rep?: boolean
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLog"]>

  export type SetLogSelectScalar = {
    id?: boolean
    sessionExerciseId?: boolean
    weight?: boolean
    set?: boolean
    rep?: boolean
  }

  export type SetLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionExerciseId" | "weight" | "set" | "rep", ExtArgs["result"]["setLog"]>
  export type SetLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }
  export type SetLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }
  export type SetLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionExercise?: boolean | SessionExerciseDefaultArgs<ExtArgs>
  }

  export type $SetLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetLog"
    objects: {
      sessionExercise: Prisma.$SessionExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionExerciseId: string
      weight: number
      set: number
      rep: number
    }, ExtArgs["result"]["setLog"]>
    composites: {}
  }

  type SetLogGetPayload<S extends boolean | null | undefined | SetLogDefaultArgs> = $Result.GetResult<Prisma.$SetLogPayload, S>

  type SetLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetLogCountAggregateInputType | true
    }

  export interface SetLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetLog'], meta: { name: 'SetLog' } }
    /**
     * Find zero or one SetLog that matches the filter.
     * @param {SetLogFindUniqueArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetLogFindUniqueArgs>(args: SelectSubset<T, SetLogFindUniqueArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SetLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetLogFindUniqueOrThrowArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SetLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindFirstArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetLogFindFirstArgs>(args?: SelectSubset<T, SetLogFindFirstArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindFirstOrThrowArgs} args - Arguments to find a SetLog
     * @example
     * // Get one SetLog
     * const setLog = await prisma.setLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SetLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SetLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetLogs
     * const setLogs = await prisma.setLog.findMany()
     * 
     * // Get first 10 SetLogs
     * const setLogs = await prisma.setLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setLogWithIdOnly = await prisma.setLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetLogFindManyArgs>(args?: SelectSubset<T, SetLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SetLog.
     * @param {SetLogCreateArgs} args - Arguments to create a SetLog.
     * @example
     * // Create one SetLog
     * const SetLog = await prisma.setLog.create({
     *   data: {
     *     // ... data to create a SetLog
     *   }
     * })
     * 
     */
    create<T extends SetLogCreateArgs>(args: SelectSubset<T, SetLogCreateArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SetLogs.
     * @param {SetLogCreateManyArgs} args - Arguments to create many SetLogs.
     * @example
     * // Create many SetLogs
     * const setLog = await prisma.setLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetLogCreateManyArgs>(args?: SelectSubset<T, SetLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SetLogs and returns the data saved in the database.
     * @param {SetLogCreateManyAndReturnArgs} args - Arguments to create many SetLogs.
     * @example
     * // Create many SetLogs
     * const setLog = await prisma.setLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SetLogs and only return the `id`
     * const setLogWithIdOnly = await prisma.setLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SetLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SetLog.
     * @param {SetLogDeleteArgs} args - Arguments to delete one SetLog.
     * @example
     * // Delete one SetLog
     * const SetLog = await prisma.setLog.delete({
     *   where: {
     *     // ... filter to delete one SetLog
     *   }
     * })
     * 
     */
    delete<T extends SetLogDeleteArgs>(args: SelectSubset<T, SetLogDeleteArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SetLog.
     * @param {SetLogUpdateArgs} args - Arguments to update one SetLog.
     * @example
     * // Update one SetLog
     * const setLog = await prisma.setLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetLogUpdateArgs>(args: SelectSubset<T, SetLogUpdateArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SetLogs.
     * @param {SetLogDeleteManyArgs} args - Arguments to filter SetLogs to delete.
     * @example
     * // Delete a few SetLogs
     * const { count } = await prisma.setLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetLogDeleteManyArgs>(args?: SelectSubset<T, SetLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetLogs
     * const setLog = await prisma.setLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetLogUpdateManyArgs>(args: SelectSubset<T, SetLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLogs and returns the data updated in the database.
     * @param {SetLogUpdateManyAndReturnArgs} args - Arguments to update many SetLogs.
     * @example
     * // Update many SetLogs
     * const setLog = await prisma.setLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SetLogs and only return the `id`
     * const setLogWithIdOnly = await prisma.setLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SetLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SetLog.
     * @param {SetLogUpsertArgs} args - Arguments to update or create a SetLog.
     * @example
     * // Update or create a SetLog
     * const setLog = await prisma.setLog.upsert({
     *   create: {
     *     // ... data to create a SetLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetLog we want to update
     *   }
     * })
     */
    upsert<T extends SetLogUpsertArgs>(args: SelectSubset<T, SetLogUpsertArgs<ExtArgs>>): Prisma__SetLogClient<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SetLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogCountArgs} args - Arguments to filter SetLogs to count.
     * @example
     * // Count the number of SetLogs
     * const count = await prisma.setLog.count({
     *   where: {
     *     // ... the filter for the SetLogs we want to count
     *   }
     * })
    **/
    count<T extends SetLogCountArgs>(
      args?: Subset<T, SetLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetLogAggregateArgs>(args: Subset<T, SetLogAggregateArgs>): Prisma.PrismaPromise<GetSetLogAggregateType<T>>

    /**
     * Group by SetLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetLogGroupByArgs['orderBy'] }
        : { orderBy?: SetLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetLog model
   */
  readonly fields: SetLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessionExercise<T extends SessionExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionExerciseDefaultArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SetLog model
   */
  interface SetLogFieldRefs {
    readonly id: FieldRef<"SetLog", 'String'>
    readonly sessionExerciseId: FieldRef<"SetLog", 'String'>
    readonly weight: FieldRef<"SetLog", 'Float'>
    readonly set: FieldRef<"SetLog", 'Int'>
    readonly rep: FieldRef<"SetLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SetLog findUnique
   */
  export type SetLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog findUniqueOrThrow
   */
  export type SetLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog findFirst
   */
  export type SetLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLogs.
     */
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog findFirstOrThrow
   */
  export type SetLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLog to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLogs.
     */
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog findMany
   */
  export type SetLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter, which SetLogs to fetch.
     */
    where?: SetLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLogs to fetch.
     */
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetLogs.
     */
    cursor?: SetLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLogs.
     */
    skip?: number
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SetLog create
   */
  export type SetLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SetLog.
     */
    data: XOR<SetLogCreateInput, SetLogUncheckedCreateInput>
  }

  /**
   * SetLog createMany
   */
  export type SetLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetLogs.
     */
    data: SetLogCreateManyInput | SetLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SetLog createManyAndReturn
   */
  export type SetLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * The data used to create many SetLogs.
     */
    data: SetLogCreateManyInput | SetLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLog update
   */
  export type SetLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SetLog.
     */
    data: XOR<SetLogUpdateInput, SetLogUncheckedUpdateInput>
    /**
     * Choose, which SetLog to update.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog updateMany
   */
  export type SetLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetLogs.
     */
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyInput>
    /**
     * Filter which SetLogs to update
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to update.
     */
    limit?: number
  }

  /**
   * SetLog updateManyAndReturn
   */
  export type SetLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * The data used to update SetLogs.
     */
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyInput>
    /**
     * Filter which SetLogs to update
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLog upsert
   */
  export type SetLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SetLog to update in case it exists.
     */
    where: SetLogWhereUniqueInput
    /**
     * In case the SetLog found by the `where` argument doesn't exist, create a new SetLog with this data.
     */
    create: XOR<SetLogCreateInput, SetLogUncheckedCreateInput>
    /**
     * In case the SetLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetLogUpdateInput, SetLogUncheckedUpdateInput>
  }

  /**
   * SetLog delete
   */
  export type SetLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    /**
     * Filter which SetLog to delete.
     */
    where: SetLogWhereUniqueInput
  }

  /**
   * SetLog deleteMany
   */
  export type SetLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLogs to delete
     */
    where?: SetLogWhereInput
    /**
     * Limit how many SetLogs to delete.
     */
    limit?: number
  }

  /**
   * SetLog without action
   */
  export type SetLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutSession
   */

  export type AggregateWorkoutSession = {
    _count: WorkoutSessionCountAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  export type WorkoutSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    notes: string | null
  }

  export type WorkoutSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    notes: string | null
  }

  export type WorkoutSessionCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    notes: number
    _all: number
  }


  export type WorkoutSessionMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    notes?: true
  }

  export type WorkoutSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    notes?: true
  }

  export type WorkoutSessionCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    notes?: true
    _all?: true
  }

  export type WorkoutSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSession to aggregate.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutSessions
    **/
    _count?: true | WorkoutSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type GetWorkoutSessionAggregateType<T extends WorkoutSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutSession[P]>
      : GetScalarType<T[P], AggregateWorkoutSession[P]>
  }




  export type WorkoutSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutSessionWhereInput
    orderBy?: WorkoutSessionOrderByWithAggregationInput | WorkoutSessionOrderByWithAggregationInput[]
    by: WorkoutSessionScalarFieldEnum[] | WorkoutSessionScalarFieldEnum
    having?: WorkoutSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutSessionCountAggregateInputType | true
    _min?: WorkoutSessionMinAggregateInputType
    _max?: WorkoutSessionMaxAggregateInputType
  }

  export type WorkoutSessionGroupByOutputType = {
    id: string
    userId: string
    date: Date
    notes: string | null
    _count: WorkoutSessionCountAggregateOutputType | null
    _min: WorkoutSessionMinAggregateOutputType | null
    _max: WorkoutSessionMaxAggregateOutputType | null
  }

  type GetWorkoutSessionGroupByPayload<T extends WorkoutSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutSessionGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutSession$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutSession"]>

  export type WorkoutSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    notes?: boolean
  }

  export type WorkoutSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "notes", ExtArgs["result"]["workoutSession"]>
  export type WorkoutSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutSession$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$SessionExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      notes: string | null
    }, ExtArgs["result"]["workoutSession"]>
    composites: {}
  }

  type WorkoutSessionGetPayload<S extends boolean | null | undefined | WorkoutSessionDefaultArgs> = $Result.GetResult<Prisma.$WorkoutSessionPayload, S>

  type WorkoutSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutSessionCountAggregateInputType | true
    }

  export interface WorkoutSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutSession'], meta: { name: 'WorkoutSession' } }
    /**
     * Find zero or one WorkoutSession that matches the filter.
     * @param {WorkoutSessionFindUniqueArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutSessionFindUniqueArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutSessionFindUniqueOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutSessionFindFirstArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindFirstOrThrowArgs} args - Arguments to find a WorkoutSession
     * @example
     * // Get one WorkoutSession
     * const workoutSession = await prisma.workoutSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany()
     * 
     * // Get first 10 WorkoutSessions
     * const workoutSessions = await prisma.workoutSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutSessionFindManyArgs>(args?: SelectSubset<T, WorkoutSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutSession.
     * @param {WorkoutSessionCreateArgs} args - Arguments to create a WorkoutSession.
     * @example
     * // Create one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.create({
     *   data: {
     *     // ... data to create a WorkoutSession
     *   }
     * })
     * 
     */
    create<T extends WorkoutSessionCreateArgs>(args: SelectSubset<T, WorkoutSessionCreateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutSessions.
     * @param {WorkoutSessionCreateManyArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutSessionCreateManyArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutSessions and returns the data saved in the database.
     * @param {WorkoutSessionCreateManyAndReturnArgs} args - Arguments to create many WorkoutSessions.
     * @example
     * // Create many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutSession.
     * @param {WorkoutSessionDeleteArgs} args - Arguments to delete one WorkoutSession.
     * @example
     * // Delete one WorkoutSession
     * const WorkoutSession = await prisma.workoutSession.delete({
     *   where: {
     *     // ... filter to delete one WorkoutSession
     *   }
     * })
     * 
     */
    delete<T extends WorkoutSessionDeleteArgs>(args: SelectSubset<T, WorkoutSessionDeleteArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutSession.
     * @param {WorkoutSessionUpdateArgs} args - Arguments to update one WorkoutSession.
     * @example
     * // Update one WorkoutSession
     * const workoutSession = await prisma.workoutSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutSessionUpdateArgs>(args: SelectSubset<T, WorkoutSessionUpdateArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutSessions.
     * @param {WorkoutSessionDeleteManyArgs} args - Arguments to filter WorkoutSessions to delete.
     * @example
     * // Delete a few WorkoutSessions
     * const { count } = await prisma.workoutSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutSessionDeleteManyArgs>(args?: SelectSubset<T, WorkoutSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutSessionUpdateManyArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutSessions and returns the data updated in the database.
     * @param {WorkoutSessionUpdateManyAndReturnArgs} args - Arguments to update many WorkoutSessions.
     * @example
     * // Update many WorkoutSessions
     * const workoutSession = await prisma.workoutSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutSessions and only return the `id`
     * const workoutSessionWithIdOnly = await prisma.workoutSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutSession.
     * @param {WorkoutSessionUpsertArgs} args - Arguments to update or create a WorkoutSession.
     * @example
     * // Update or create a WorkoutSession
     * const workoutSession = await prisma.workoutSession.upsert({
     *   create: {
     *     // ... data to create a WorkoutSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutSession we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutSessionUpsertArgs>(args: SelectSubset<T, WorkoutSessionUpsertArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionCountArgs} args - Arguments to filter WorkoutSessions to count.
     * @example
     * // Count the number of WorkoutSessions
     * const count = await prisma.workoutSession.count({
     *   where: {
     *     // ... the filter for the WorkoutSessions we want to count
     *   }
     * })
    **/
    count<T extends WorkoutSessionCountArgs>(
      args?: Subset<T, WorkoutSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutSessionAggregateArgs>(args: Subset<T, WorkoutSessionAggregateArgs>): Prisma.PrismaPromise<GetWorkoutSessionAggregateType<T>>

    /**
     * Group by WorkoutSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutSessionGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutSession model
   */
  readonly fields: WorkoutSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends WorkoutSession$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSession$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutSession model
   */
  interface WorkoutSessionFieldRefs {
    readonly id: FieldRef<"WorkoutSession", 'String'>
    readonly userId: FieldRef<"WorkoutSession", 'String'>
    readonly date: FieldRef<"WorkoutSession", 'DateTime'>
    readonly notes: FieldRef<"WorkoutSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutSession findUnique
   */
  export type WorkoutSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findUniqueOrThrow
   */
  export type WorkoutSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession findFirst
   */
  export type WorkoutSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findFirstOrThrow
   */
  export type WorkoutSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSession to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutSessions.
     */
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession findMany
   */
  export type WorkoutSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutSessions to fetch.
     */
    where?: WorkoutSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutSessions to fetch.
     */
    orderBy?: WorkoutSessionOrderByWithRelationInput | WorkoutSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutSessions.
     */
    cursor?: WorkoutSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutSessions.
     */
    skip?: number
    distinct?: WorkoutSessionScalarFieldEnum | WorkoutSessionScalarFieldEnum[]
  }

  /**
   * WorkoutSession create
   */
  export type WorkoutSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutSession.
     */
    data: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
  }

  /**
   * WorkoutSession createMany
   */
  export type WorkoutSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutSession createManyAndReturn
   */
  export type WorkoutSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutSessions.
     */
    data: WorkoutSessionCreateManyInput | WorkoutSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession update
   */
  export type WorkoutSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutSession.
     */
    data: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
    /**
     * Choose, which WorkoutSession to update.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession updateMany
   */
  export type WorkoutSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
  }

  /**
   * WorkoutSession updateManyAndReturn
   */
  export type WorkoutSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutSessions.
     */
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutSessions to update
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutSession upsert
   */
  export type WorkoutSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutSession to update in case it exists.
     */
    where: WorkoutSessionWhereUniqueInput
    /**
     * In case the WorkoutSession found by the `where` argument doesn't exist, create a new WorkoutSession with this data.
     */
    create: XOR<WorkoutSessionCreateInput, WorkoutSessionUncheckedCreateInput>
    /**
     * In case the WorkoutSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutSessionUpdateInput, WorkoutSessionUncheckedUpdateInput>
  }

  /**
   * WorkoutSession delete
   */
  export type WorkoutSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
    /**
     * Filter which WorkoutSession to delete.
     */
    where: WorkoutSessionWhereUniqueInput
  }

  /**
   * WorkoutSession deleteMany
   */
  export type WorkoutSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutSessions to delete
     */
    where?: WorkoutSessionWhereInput
    /**
     * Limit how many WorkoutSessions to delete.
     */
    limit?: number
  }

  /**
   * WorkoutSession.exercises
   */
  export type WorkoutSession$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    where?: SessionExerciseWhereInput
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    cursor?: SessionExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionExerciseScalarFieldEnum | SessionExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutSession without action
   */
  export type WorkoutSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutSession
     */
    select?: WorkoutSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutSession
     */
    omit?: WorkoutSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutSessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionExercise
   */

  export type AggregateSessionExercise = {
    _count: SessionExerciseCountAggregateOutputType | null
    _min: SessionExerciseMinAggregateOutputType | null
    _max: SessionExerciseMaxAggregateOutputType | null
  }

  export type SessionExerciseMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    exerciseId: string | null
  }

  export type SessionExerciseMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    exerciseId: string | null
  }

  export type SessionExerciseCountAggregateOutputType = {
    id: number
    sessionId: number
    exerciseId: number
    _all: number
  }


  export type SessionExerciseMinAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
  }

  export type SessionExerciseMaxAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
  }

  export type SessionExerciseCountAggregateInputType = {
    id?: true
    sessionId?: true
    exerciseId?: true
    _all?: true
  }

  export type SessionExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionExercise to aggregate.
     */
    where?: SessionExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionExercises to fetch.
     */
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionExercises
    **/
    _count?: true | SessionExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionExerciseMaxAggregateInputType
  }

  export type GetSessionExerciseAggregateType<T extends SessionExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionExercise[P]>
      : GetScalarType<T[P], AggregateSessionExercise[P]>
  }




  export type SessionExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionExerciseWhereInput
    orderBy?: SessionExerciseOrderByWithAggregationInput | SessionExerciseOrderByWithAggregationInput[]
    by: SessionExerciseScalarFieldEnum[] | SessionExerciseScalarFieldEnum
    having?: SessionExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionExerciseCountAggregateInputType | true
    _min?: SessionExerciseMinAggregateInputType
    _max?: SessionExerciseMaxAggregateInputType
  }

  export type SessionExerciseGroupByOutputType = {
    id: string
    sessionId: string
    exerciseId: string
    _count: SessionExerciseCountAggregateOutputType | null
    _min: SessionExerciseMinAggregateOutputType | null
    _max: SessionExerciseMaxAggregateOutputType | null
  }

  type GetSessionExerciseGroupByPayload<T extends SessionExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], SessionExerciseGroupByOutputType[P]>
        }
      >
    >


  export type SessionExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | SessionExercise$setsArgs<ExtArgs>
    _count?: boolean | SessionExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionExercise"]>

  export type SessionExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionExercise"]>

  export type SessionExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionExercise"]>

  export type SessionExerciseSelectScalar = {
    id?: boolean
    sessionId?: boolean
    exerciseId?: boolean
  }

  export type SessionExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "exerciseId", ExtArgs["result"]["sessionExercise"]>
  export type SessionExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | SessionExercise$setsArgs<ExtArgs>
    _count?: boolean | SessionExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type SessionExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WorkoutSessionDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $SessionExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionExercise"
    objects: {
      session: Prisma.$WorkoutSessionPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      sets: Prisma.$SetLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      exerciseId: string
    }, ExtArgs["result"]["sessionExercise"]>
    composites: {}
  }

  type SessionExerciseGetPayload<S extends boolean | null | undefined | SessionExerciseDefaultArgs> = $Result.GetResult<Prisma.$SessionExercisePayload, S>

  type SessionExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionExerciseCountAggregateInputType | true
    }

  export interface SessionExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionExercise'], meta: { name: 'SessionExercise' } }
    /**
     * Find zero or one SessionExercise that matches the filter.
     * @param {SessionExerciseFindUniqueArgs} args - Arguments to find a SessionExercise
     * @example
     * // Get one SessionExercise
     * const sessionExercise = await prisma.sessionExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionExerciseFindUniqueArgs>(args: SelectSubset<T, SessionExerciseFindUniqueArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionExerciseFindUniqueOrThrowArgs} args - Arguments to find a SessionExercise
     * @example
     * // Get one SessionExercise
     * const sessionExercise = await prisma.sessionExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseFindFirstArgs} args - Arguments to find a SessionExercise
     * @example
     * // Get one SessionExercise
     * const sessionExercise = await prisma.sessionExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionExerciseFindFirstArgs>(args?: SelectSubset<T, SessionExerciseFindFirstArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseFindFirstOrThrowArgs} args - Arguments to find a SessionExercise
     * @example
     * // Get one SessionExercise
     * const sessionExercise = await prisma.sessionExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionExercises
     * const sessionExercises = await prisma.sessionExercise.findMany()
     * 
     * // Get first 10 SessionExercises
     * const sessionExercises = await prisma.sessionExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionExerciseWithIdOnly = await prisma.sessionExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionExerciseFindManyArgs>(args?: SelectSubset<T, SessionExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionExercise.
     * @param {SessionExerciseCreateArgs} args - Arguments to create a SessionExercise.
     * @example
     * // Create one SessionExercise
     * const SessionExercise = await prisma.sessionExercise.create({
     *   data: {
     *     // ... data to create a SessionExercise
     *   }
     * })
     * 
     */
    create<T extends SessionExerciseCreateArgs>(args: SelectSubset<T, SessionExerciseCreateArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionExercises.
     * @param {SessionExerciseCreateManyArgs} args - Arguments to create many SessionExercises.
     * @example
     * // Create many SessionExercises
     * const sessionExercise = await prisma.sessionExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionExerciseCreateManyArgs>(args?: SelectSubset<T, SessionExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionExercises and returns the data saved in the database.
     * @param {SessionExerciseCreateManyAndReturnArgs} args - Arguments to create many SessionExercises.
     * @example
     * // Create many SessionExercises
     * const sessionExercise = await prisma.sessionExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionExercises and only return the `id`
     * const sessionExerciseWithIdOnly = await prisma.sessionExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionExercise.
     * @param {SessionExerciseDeleteArgs} args - Arguments to delete one SessionExercise.
     * @example
     * // Delete one SessionExercise
     * const SessionExercise = await prisma.sessionExercise.delete({
     *   where: {
     *     // ... filter to delete one SessionExercise
     *   }
     * })
     * 
     */
    delete<T extends SessionExerciseDeleteArgs>(args: SelectSubset<T, SessionExerciseDeleteArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionExercise.
     * @param {SessionExerciseUpdateArgs} args - Arguments to update one SessionExercise.
     * @example
     * // Update one SessionExercise
     * const sessionExercise = await prisma.sessionExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionExerciseUpdateArgs>(args: SelectSubset<T, SessionExerciseUpdateArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionExercises.
     * @param {SessionExerciseDeleteManyArgs} args - Arguments to filter SessionExercises to delete.
     * @example
     * // Delete a few SessionExercises
     * const { count } = await prisma.sessionExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionExerciseDeleteManyArgs>(args?: SelectSubset<T, SessionExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionExercises
     * const sessionExercise = await prisma.sessionExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionExerciseUpdateManyArgs>(args: SelectSubset<T, SessionExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionExercises and returns the data updated in the database.
     * @param {SessionExerciseUpdateManyAndReturnArgs} args - Arguments to update many SessionExercises.
     * @example
     * // Update many SessionExercises
     * const sessionExercise = await prisma.sessionExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionExercises and only return the `id`
     * const sessionExerciseWithIdOnly = await prisma.sessionExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionExercise.
     * @param {SessionExerciseUpsertArgs} args - Arguments to update or create a SessionExercise.
     * @example
     * // Update or create a SessionExercise
     * const sessionExercise = await prisma.sessionExercise.upsert({
     *   create: {
     *     // ... data to create a SessionExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionExercise we want to update
     *   }
     * })
     */
    upsert<T extends SessionExerciseUpsertArgs>(args: SelectSubset<T, SessionExerciseUpsertArgs<ExtArgs>>): Prisma__SessionExerciseClient<$Result.GetResult<Prisma.$SessionExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseCountArgs} args - Arguments to filter SessionExercises to count.
     * @example
     * // Count the number of SessionExercises
     * const count = await prisma.sessionExercise.count({
     *   where: {
     *     // ... the filter for the SessionExercises we want to count
     *   }
     * })
    **/
    count<T extends SessionExerciseCountArgs>(
      args?: Subset<T, SessionExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionExerciseAggregateArgs>(args: Subset<T, SessionExerciseAggregateArgs>): Prisma.PrismaPromise<GetSessionExerciseAggregateType<T>>

    /**
     * Group by SessionExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionExerciseGroupByArgs['orderBy'] }
        : { orderBy?: SessionExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionExercise model
   */
  readonly fields: SessionExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends WorkoutSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutSessionDefaultArgs<ExtArgs>>): Prisma__WorkoutSessionClient<$Result.GetResult<Prisma.$WorkoutSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sets<T extends SessionExercise$setsArgs<ExtArgs> = {}>(args?: Subset<T, SessionExercise$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionExercise model
   */
  interface SessionExerciseFieldRefs {
    readonly id: FieldRef<"SessionExercise", 'String'>
    readonly sessionId: FieldRef<"SessionExercise", 'String'>
    readonly exerciseId: FieldRef<"SessionExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionExercise findUnique
   */
  export type SessionExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter, which SessionExercise to fetch.
     */
    where: SessionExerciseWhereUniqueInput
  }

  /**
   * SessionExercise findUniqueOrThrow
   */
  export type SessionExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter, which SessionExercise to fetch.
     */
    where: SessionExerciseWhereUniqueInput
  }

  /**
   * SessionExercise findFirst
   */
  export type SessionExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter, which SessionExercise to fetch.
     */
    where?: SessionExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionExercises to fetch.
     */
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionExercises.
     */
    cursor?: SessionExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionExercises.
     */
    distinct?: SessionExerciseScalarFieldEnum | SessionExerciseScalarFieldEnum[]
  }

  /**
   * SessionExercise findFirstOrThrow
   */
  export type SessionExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter, which SessionExercise to fetch.
     */
    where?: SessionExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionExercises to fetch.
     */
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionExercises.
     */
    cursor?: SessionExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionExercises.
     */
    distinct?: SessionExerciseScalarFieldEnum | SessionExerciseScalarFieldEnum[]
  }

  /**
   * SessionExercise findMany
   */
  export type SessionExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter, which SessionExercises to fetch.
     */
    where?: SessionExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionExercises to fetch.
     */
    orderBy?: SessionExerciseOrderByWithRelationInput | SessionExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionExercises.
     */
    cursor?: SessionExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionExercises.
     */
    skip?: number
    distinct?: SessionExerciseScalarFieldEnum | SessionExerciseScalarFieldEnum[]
  }

  /**
   * SessionExercise create
   */
  export type SessionExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionExercise.
     */
    data: XOR<SessionExerciseCreateInput, SessionExerciseUncheckedCreateInput>
  }

  /**
   * SessionExercise createMany
   */
  export type SessionExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionExercises.
     */
    data: SessionExerciseCreateManyInput | SessionExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionExercise createManyAndReturn
   */
  export type SessionExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many SessionExercises.
     */
    data: SessionExerciseCreateManyInput | SessionExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionExercise update
   */
  export type SessionExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionExercise.
     */
    data: XOR<SessionExerciseUpdateInput, SessionExerciseUncheckedUpdateInput>
    /**
     * Choose, which SessionExercise to update.
     */
    where: SessionExerciseWhereUniqueInput
  }

  /**
   * SessionExercise updateMany
   */
  export type SessionExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionExercises.
     */
    data: XOR<SessionExerciseUpdateManyMutationInput, SessionExerciseUncheckedUpdateManyInput>
    /**
     * Filter which SessionExercises to update
     */
    where?: SessionExerciseWhereInput
    /**
     * Limit how many SessionExercises to update.
     */
    limit?: number
  }

  /**
   * SessionExercise updateManyAndReturn
   */
  export type SessionExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * The data used to update SessionExercises.
     */
    data: XOR<SessionExerciseUpdateManyMutationInput, SessionExerciseUncheckedUpdateManyInput>
    /**
     * Filter which SessionExercises to update
     */
    where?: SessionExerciseWhereInput
    /**
     * Limit how many SessionExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionExercise upsert
   */
  export type SessionExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionExercise to update in case it exists.
     */
    where: SessionExerciseWhereUniqueInput
    /**
     * In case the SessionExercise found by the `where` argument doesn't exist, create a new SessionExercise with this data.
     */
    create: XOR<SessionExerciseCreateInput, SessionExerciseUncheckedCreateInput>
    /**
     * In case the SessionExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionExerciseUpdateInput, SessionExerciseUncheckedUpdateInput>
  }

  /**
   * SessionExercise delete
   */
  export type SessionExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
    /**
     * Filter which SessionExercise to delete.
     */
    where: SessionExerciseWhereUniqueInput
  }

  /**
   * SessionExercise deleteMany
   */
  export type SessionExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionExercises to delete
     */
    where?: SessionExerciseWhereInput
    /**
     * Limit how many SessionExercises to delete.
     */
    limit?: number
  }

  /**
   * SessionExercise.sets
   */
  export type SessionExercise$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLog
     */
    select?: SetLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLog
     */
    omit?: SetLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLogInclude<ExtArgs> | null
    where?: SetLogWhereInput
    orderBy?: SetLogOrderByWithRelationInput | SetLogOrderByWithRelationInput[]
    cursor?: SetLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetLogScalarFieldEnum | SetLogScalarFieldEnum[]
  }

  /**
   * SessionExercise without action
   */
  export type SessionExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionExercise
     */
    select?: SessionExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionExercise
     */
    omit?: SessionExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionExerciseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userName: 'userName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    role: 'role',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    slug: 'slug',
    equipment: 'equipment',
    instructions: 'instructions',
    createdAt: 'createdAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const SetLogScalarFieldEnum: {
    id: 'id',
    sessionExerciseId: 'sessionExerciseId',
    weight: 'weight',
    set: 'set',
    rep: 'rep'
  };

  export type SetLogScalarFieldEnum = (typeof SetLogScalarFieldEnum)[keyof typeof SetLogScalarFieldEnum]


  export const WorkoutSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    notes: 'notes'
  };

  export type WorkoutSessionScalarFieldEnum = (typeof WorkoutSessionScalarFieldEnum)[keyof typeof WorkoutSessionScalarFieldEnum]


  export const SessionExerciseScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    exerciseId: 'exerciseId'
  };

  export type SessionExerciseScalarFieldEnum = (typeof SessionExerciseScalarFieldEnum)[keyof typeof SessionExerciseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'ExerciseType'
   */
  export type EnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType'>
    


  /**
   * Reference to a field of type 'ExerciseType[]'
   */
  export type ListEnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType[]'>
    


  /**
   * Reference to a field of type 'EquipmentType'
   */
  export type EnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType'>
    


  /**
   * Reference to a field of type 'EquipmentType[]'
   */
  export type ListEnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    workout?: WorkoutSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    type?: SortOrder
    workout?: WorkoutSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    workout?: WorkoutSessionListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    slug?: StringFilter<"Exercise"> | string
    equipment?: EnumEquipmentTypeFilter<"Exercise"> | $Enums.EquipmentType
    instructions?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    SessionExercises?: SessionExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    SessionExercises?: SessionExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    equipment?: EnumEquipmentTypeFilter<"Exercise"> | $Enums.EquipmentType
    instructions?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    SessionExercises?: SessionExerciseListRelationFilter
  }, "id" | "name" | "slug">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    type?: EnumExerciseTypeWithAggregatesFilter<"Exercise"> | $Enums.ExerciseType
    slug?: StringWithAggregatesFilter<"Exercise"> | string
    equipment?: EnumEquipmentTypeWithAggregatesFilter<"Exercise"> | $Enums.EquipmentType
    instructions?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type SetLogWhereInput = {
    AND?: SetLogWhereInput | SetLogWhereInput[]
    OR?: SetLogWhereInput[]
    NOT?: SetLogWhereInput | SetLogWhereInput[]
    id?: StringFilter<"SetLog"> | string
    sessionExerciseId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    set?: IntFilter<"SetLog"> | number
    rep?: IntFilter<"SetLog"> | number
    sessionExercise?: XOR<SessionExerciseScalarRelationFilter, SessionExerciseWhereInput>
  }

  export type SetLogOrderByWithRelationInput = {
    id?: SortOrder
    sessionExerciseId?: SortOrder
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
    sessionExercise?: SessionExerciseOrderByWithRelationInput
  }

  export type SetLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetLogWhereInput | SetLogWhereInput[]
    OR?: SetLogWhereInput[]
    NOT?: SetLogWhereInput | SetLogWhereInput[]
    sessionExerciseId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    set?: IntFilter<"SetLog"> | number
    rep?: IntFilter<"SetLog"> | number
    sessionExercise?: XOR<SessionExerciseScalarRelationFilter, SessionExerciseWhereInput>
  }, "id">

  export type SetLogOrderByWithAggregationInput = {
    id?: SortOrder
    sessionExerciseId?: SortOrder
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
    _count?: SetLogCountOrderByAggregateInput
    _avg?: SetLogAvgOrderByAggregateInput
    _max?: SetLogMaxOrderByAggregateInput
    _min?: SetLogMinOrderByAggregateInput
    _sum?: SetLogSumOrderByAggregateInput
  }

  export type SetLogScalarWhereWithAggregatesInput = {
    AND?: SetLogScalarWhereWithAggregatesInput | SetLogScalarWhereWithAggregatesInput[]
    OR?: SetLogScalarWhereWithAggregatesInput[]
    NOT?: SetLogScalarWhereWithAggregatesInput | SetLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetLog"> | string
    sessionExerciseId?: StringWithAggregatesFilter<"SetLog"> | string
    weight?: FloatWithAggregatesFilter<"SetLog"> | number
    set?: IntWithAggregatesFilter<"SetLog"> | number
    rep?: IntWithAggregatesFilter<"SetLog"> | number
  }

  export type WorkoutSessionWhereInput = {
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    userId?: StringFilter<"WorkoutSession"> | string
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    notes?: StringNullableFilter<"WorkoutSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: SessionExerciseListRelationFilter
  }

  export type WorkoutSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: SessionExerciseOrderByRelationAggregateInput
  }

  export type WorkoutSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    OR?: WorkoutSessionWhereInput[]
    NOT?: WorkoutSessionWhereInput | WorkoutSessionWhereInput[]
    userId?: StringFilter<"WorkoutSession"> | string
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    notes?: StringNullableFilter<"WorkoutSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: SessionExerciseListRelationFilter
  }, "id">

  export type WorkoutSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: WorkoutSessionCountOrderByAggregateInput
    _max?: WorkoutSessionMaxOrderByAggregateInput
    _min?: WorkoutSessionMinOrderByAggregateInput
  }

  export type WorkoutSessionScalarWhereWithAggregatesInput = {
    AND?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    OR?: WorkoutSessionScalarWhereWithAggregatesInput[]
    NOT?: WorkoutSessionScalarWhereWithAggregatesInput | WorkoutSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutSession"> | string
    userId?: StringWithAggregatesFilter<"WorkoutSession"> | string
    date?: DateTimeWithAggregatesFilter<"WorkoutSession"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"WorkoutSession"> | string | null
  }

  export type SessionExerciseWhereInput = {
    AND?: SessionExerciseWhereInput | SessionExerciseWhereInput[]
    OR?: SessionExerciseWhereInput[]
    NOT?: SessionExerciseWhereInput | SessionExerciseWhereInput[]
    id?: StringFilter<"SessionExercise"> | string
    sessionId?: StringFilter<"SessionExercise"> | string
    exerciseId?: StringFilter<"SessionExercise"> | string
    session?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetLogListRelationFilter
  }

  export type SessionExerciseOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    session?: WorkoutSessionOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    sets?: SetLogOrderByRelationAggregateInput
  }

  export type SessionExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionExerciseWhereInput | SessionExerciseWhereInput[]
    OR?: SessionExerciseWhereInput[]
    NOT?: SessionExerciseWhereInput | SessionExerciseWhereInput[]
    sessionId?: StringFilter<"SessionExercise"> | string
    exerciseId?: StringFilter<"SessionExercise"> | string
    session?: XOR<WorkoutSessionScalarRelationFilter, WorkoutSessionWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetLogListRelationFilter
  }, "id">

  export type SessionExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
    _count?: SessionExerciseCountOrderByAggregateInput
    _max?: SessionExerciseMaxOrderByAggregateInput
    _min?: SessionExerciseMinOrderByAggregateInput
  }

  export type SessionExerciseScalarWhereWithAggregatesInput = {
    AND?: SessionExerciseScalarWhereWithAggregatesInput | SessionExerciseScalarWhereWithAggregatesInput[]
    OR?: SessionExerciseScalarWhereWithAggregatesInput[]
    NOT?: SessionExerciseScalarWhereWithAggregatesInput | SessionExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionExercise"> | string
    sessionId?: StringWithAggregatesFilter<"SessionExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"SessionExercise"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    role?: $Enums.UserRole
    type?: $Enums.UserType
    workout?: WorkoutSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    role?: $Enums.UserRole
    type?: $Enums.UserType
    workout?: WorkoutSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    workout?: WorkoutSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    workout?: WorkoutSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    role?: $Enums.UserRole
    type?: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions?: string | null
    createdAt?: Date | string
    SessionExercises?: SessionExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions?: string | null
    createdAt?: Date | string
    SessionExercises?: SessionExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionExercises?: SessionExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionExercises?: SessionExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions?: string | null
    createdAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetLogCreateInput = {
    id?: string
    weight: number
    set: number
    rep: number
    sessionExercise: SessionExerciseCreateNestedOneWithoutSetsInput
  }

  export type SetLogUncheckedCreateInput = {
    id?: string
    sessionExerciseId: string
    weight: number
    set: number
    rep: number
  }

  export type SetLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
    sessionExercise?: SessionExerciseUpdateOneRequiredWithoutSetsNestedInput
  }

  export type SetLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionExerciseId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogCreateManyInput = {
    id?: string
    sessionExerciseId: string
    weight: number
    set: number
    rep: number
  }

  export type SetLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionExerciseId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutSessionCreateInput = {
    id?: string
    date?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutWorkoutInput
    exercises?: SessionExerciseCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    notes?: string | null
    exercises?: SessionExerciseUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutNestedInput
    exercises?: SessionExerciseUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: SessionExerciseUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    notes?: string | null
  }

  export type WorkoutSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionExerciseCreateInput = {
    id?: string
    session: WorkoutSessionCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutSessionExercisesInput
    sets?: SetLogCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseUncheckedCreateInput = {
    id?: string
    sessionId: string
    exerciseId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutSessionExercisesNestedInput
    sets?: SetLogUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseCreateManyInput = {
    id?: string
    sessionId: string
    exerciseId: string
  }

  export type SessionExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SessionExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type WorkoutSessionListRelationFilter = {
    every?: WorkoutSessionWhereInput
    some?: WorkoutSessionWhereInput
    none?: WorkoutSessionWhereInput
  }

  export type WorkoutSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type EnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionExerciseListRelationFilter = {
    every?: SessionExerciseWhereInput
    some?: SessionExerciseWhereInput
    none?: SessionExerciseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type EnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SessionExerciseScalarRelationFilter = {
    is?: SessionExerciseWhereInput
    isNot?: SessionExerciseWhereInput
  }

  export type SetLogCountOrderByAggregateInput = {
    id?: SortOrder
    sessionExerciseId?: SortOrder
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
  }

  export type SetLogAvgOrderByAggregateInput = {
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
  }

  export type SetLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionExerciseId?: SortOrder
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
  }

  export type SetLogMinOrderByAggregateInput = {
    id?: SortOrder
    sessionExerciseId?: SortOrder
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
  }

  export type SetLogSumOrderByAggregateInput = {
    weight?: SortOrder
    set?: SortOrder
    rep?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkoutSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutSessionScalarRelationFilter = {
    is?: WorkoutSessionWhereInput
    isNot?: WorkoutSessionWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type SetLogListRelationFilter = {
    every?: SetLogWhereInput
    some?: SetLogWhereInput
    none?: SetLogWhereInput
  }

  export type SetLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type SessionExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type SessionExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    exerciseId?: SortOrder
  }

  export type WorkoutSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput> | WorkoutSessionCreateWithoutUserInput[] | WorkoutSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutUserInput | WorkoutSessionCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutSessionCreateManyUserInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type WorkoutSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput> | WorkoutSessionCreateWithoutUserInput[] | WorkoutSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutUserInput | WorkoutSessionCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutSessionCreateManyUserInputEnvelope
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type WorkoutSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput> | WorkoutSessionCreateWithoutUserInput[] | WorkoutSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutUserInput | WorkoutSessionCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutUserInput | WorkoutSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutSessionCreateManyUserInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutUserInput | WorkoutSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutUserInput | WorkoutSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput> | WorkoutSessionCreateWithoutUserInput[] | WorkoutSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutUserInput | WorkoutSessionCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutSessionUpsertWithWhereUniqueWithoutUserInput | WorkoutSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutSessionCreateManyUserInputEnvelope
    set?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    disconnect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    delete?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    connect?: WorkoutSessionWhereUniqueInput | WorkoutSessionWhereUniqueInput[]
    update?: WorkoutSessionUpdateWithWhereUniqueWithoutUserInput | WorkoutSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutSessionUpdateManyWithWhereWithoutUserInput | WorkoutSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
  }

  export type SessionExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput> | SessionExerciseCreateWithoutExerciseInput[] | SessionExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutExerciseInput | SessionExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: SessionExerciseCreateManyExerciseInputEnvelope
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
  }

  export type SessionExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput> | SessionExerciseCreateWithoutExerciseInput[] | SessionExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutExerciseInput | SessionExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: SessionExerciseCreateManyExerciseInputEnvelope
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseType
  }

  export type EnumEquipmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput> | SessionExerciseCreateWithoutExerciseInput[] | SessionExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutExerciseInput | SessionExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: SessionExerciseUpsertWithWhereUniqueWithoutExerciseInput | SessionExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SessionExerciseCreateManyExerciseInputEnvelope
    set?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    disconnect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    delete?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    update?: SessionExerciseUpdateWithWhereUniqueWithoutExerciseInput | SessionExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SessionExerciseUpdateManyWithWhereWithoutExerciseInput | SessionExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
  }

  export type SessionExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput> | SessionExerciseCreateWithoutExerciseInput[] | SessionExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutExerciseInput | SessionExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: SessionExerciseUpsertWithWhereUniqueWithoutExerciseInput | SessionExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: SessionExerciseCreateManyExerciseInputEnvelope
    set?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    disconnect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    delete?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    update?: SessionExerciseUpdateWithWhereUniqueWithoutExerciseInput | SessionExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: SessionExerciseUpdateManyWithWhereWithoutExerciseInput | SessionExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
  }

  export type SessionExerciseCreateNestedOneWithoutSetsInput = {
    create?: XOR<SessionExerciseCreateWithoutSetsInput, SessionExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSetsInput
    connect?: SessionExerciseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionExerciseUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<SessionExerciseCreateWithoutSetsInput, SessionExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSetsInput
    upsert?: SessionExerciseUpsertWithoutSetsInput
    connect?: SessionExerciseWhereUniqueInput
    update?: XOR<XOR<SessionExerciseUpdateToOneWithWhereWithoutSetsInput, SessionExerciseUpdateWithoutSetsInput>, SessionExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutInput = {
    create?: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutInput
    connect?: UserWhereUniqueInput
  }

  export type SessionExerciseCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput> | SessionExerciseCreateWithoutSessionInput[] | SessionExerciseUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSessionInput | SessionExerciseCreateOrConnectWithoutSessionInput[]
    createMany?: SessionExerciseCreateManySessionInputEnvelope
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
  }

  export type SessionExerciseUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput> | SessionExerciseCreateWithoutSessionInput[] | SessionExerciseUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSessionInput | SessionExerciseCreateOrConnectWithoutSessionInput[]
    createMany?: SessionExerciseCreateManySessionInputEnvelope
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkoutNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutInput
    upsert?: UserUpsertWithoutWorkoutInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutInput, UserUpdateWithoutWorkoutInput>, UserUncheckedUpdateWithoutWorkoutInput>
  }

  export type SessionExerciseUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput> | SessionExerciseCreateWithoutSessionInput[] | SessionExerciseUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSessionInput | SessionExerciseCreateOrConnectWithoutSessionInput[]
    upsert?: SessionExerciseUpsertWithWhereUniqueWithoutSessionInput | SessionExerciseUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionExerciseCreateManySessionInputEnvelope
    set?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    disconnect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    delete?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    update?: SessionExerciseUpdateWithWhereUniqueWithoutSessionInput | SessionExerciseUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionExerciseUpdateManyWithWhereWithoutSessionInput | SessionExerciseUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
  }

  export type SessionExerciseUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput> | SessionExerciseCreateWithoutSessionInput[] | SessionExerciseUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionExerciseCreateOrConnectWithoutSessionInput | SessionExerciseCreateOrConnectWithoutSessionInput[]
    upsert?: SessionExerciseUpsertWithWhereUniqueWithoutSessionInput | SessionExerciseUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionExerciseCreateManySessionInputEnvelope
    set?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    disconnect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    delete?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    connect?: SessionExerciseWhereUniqueInput | SessionExerciseWhereUniqueInput[]
    update?: SessionExerciseUpdateWithWhereUniqueWithoutSessionInput | SessionExerciseUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionExerciseUpdateManyWithWhereWithoutSessionInput | SessionExerciseUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
  }

  export type WorkoutSessionCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutExercisesInput
    connect?: WorkoutSessionWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutSessionExercisesInput = {
    create?: XOR<ExerciseCreateWithoutSessionExercisesInput, ExerciseUncheckedCreateWithoutSessionExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSessionExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type SetLogCreateNestedManyWithoutSessionExerciseInput = {
    create?: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput> | SetLogCreateWithoutSessionExerciseInput[] | SetLogUncheckedCreateWithoutSessionExerciseInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutSessionExerciseInput | SetLogCreateOrConnectWithoutSessionExerciseInput[]
    createMany?: SetLogCreateManySessionExerciseInputEnvelope
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
  }

  export type SetLogUncheckedCreateNestedManyWithoutSessionExerciseInput = {
    create?: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput> | SetLogCreateWithoutSessionExerciseInput[] | SetLogUncheckedCreateWithoutSessionExerciseInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutSessionExerciseInput | SetLogCreateOrConnectWithoutSessionExerciseInput[]
    createMany?: SetLogCreateManySessionExerciseInputEnvelope
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
  }

  export type WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutSessionCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutSessionUpsertWithoutExercisesInput
    connect?: WorkoutSessionWhereUniqueInput
    update?: XOR<XOR<WorkoutSessionUpdateToOneWithWhereWithoutExercisesInput, WorkoutSessionUpdateWithoutExercisesInput>, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutSessionExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutSessionExercisesInput, ExerciseUncheckedCreateWithoutSessionExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutSessionExercisesInput
    upsert?: ExerciseUpsertWithoutSessionExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutSessionExercisesInput, ExerciseUpdateWithoutSessionExercisesInput>, ExerciseUncheckedUpdateWithoutSessionExercisesInput>
  }

  export type SetLogUpdateManyWithoutSessionExerciseNestedInput = {
    create?: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput> | SetLogCreateWithoutSessionExerciseInput[] | SetLogUncheckedCreateWithoutSessionExerciseInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutSessionExerciseInput | SetLogCreateOrConnectWithoutSessionExerciseInput[]
    upsert?: SetLogUpsertWithWhereUniqueWithoutSessionExerciseInput | SetLogUpsertWithWhereUniqueWithoutSessionExerciseInput[]
    createMany?: SetLogCreateManySessionExerciseInputEnvelope
    set?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    disconnect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    delete?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    update?: SetLogUpdateWithWhereUniqueWithoutSessionExerciseInput | SetLogUpdateWithWhereUniqueWithoutSessionExerciseInput[]
    updateMany?: SetLogUpdateManyWithWhereWithoutSessionExerciseInput | SetLogUpdateManyWithWhereWithoutSessionExerciseInput[]
    deleteMany?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
  }

  export type SetLogUncheckedUpdateManyWithoutSessionExerciseNestedInput = {
    create?: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput> | SetLogCreateWithoutSessionExerciseInput[] | SetLogUncheckedCreateWithoutSessionExerciseInput[]
    connectOrCreate?: SetLogCreateOrConnectWithoutSessionExerciseInput | SetLogCreateOrConnectWithoutSessionExerciseInput[]
    upsert?: SetLogUpsertWithWhereUniqueWithoutSessionExerciseInput | SetLogUpsertWithWhereUniqueWithoutSessionExerciseInput[]
    createMany?: SetLogCreateManySessionExerciseInputEnvelope
    set?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    disconnect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    delete?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    connect?: SetLogWhereUniqueInput | SetLogWhereUniqueInput[]
    update?: SetLogUpdateWithWhereUniqueWithoutSessionExerciseInput | SetLogUpdateWithWhereUniqueWithoutSessionExerciseInput[]
    updateMany?: SetLogUpdateManyWithWhereWithoutSessionExerciseInput | SetLogUpdateManyWithWhereWithoutSessionExerciseInput[]
    deleteMany?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type NestedEnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WorkoutSessionCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    notes?: string | null
    exercises?: SessionExerciseCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    notes?: string | null
    exercises?: SessionExerciseUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WorkoutSessionCreateOrConnectWithoutUserInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput>
  }

  export type WorkoutSessionCreateManyUserInputEnvelope = {
    data: WorkoutSessionCreateManyUserInput | WorkoutSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutSessionWhereUniqueInput
    update: XOR<WorkoutSessionUpdateWithoutUserInput, WorkoutSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutSessionCreateWithoutUserInput, WorkoutSessionUncheckedCreateWithoutUserInput>
  }

  export type WorkoutSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutSessionWhereUniqueInput
    data: XOR<WorkoutSessionUpdateWithoutUserInput, WorkoutSessionUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutSessionUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutSessionScalarWhereInput
    data: XOR<WorkoutSessionUpdateManyMutationInput, WorkoutSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutSessionScalarWhereInput = {
    AND?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    OR?: WorkoutSessionScalarWhereInput[]
    NOT?: WorkoutSessionScalarWhereInput | WorkoutSessionScalarWhereInput[]
    id?: StringFilter<"WorkoutSession"> | string
    userId?: StringFilter<"WorkoutSession"> | string
    date?: DateTimeFilter<"WorkoutSession"> | Date | string
    notes?: StringNullableFilter<"WorkoutSession"> | string | null
  }

  export type SessionExerciseCreateWithoutExerciseInput = {
    id?: string
    session: WorkoutSessionCreateNestedOneWithoutExercisesInput
    sets?: SetLogCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    sessionId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseCreateOrConnectWithoutExerciseInput = {
    where: SessionExerciseWhereUniqueInput
    create: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type SessionExerciseCreateManyExerciseInputEnvelope = {
    data: SessionExerciseCreateManyExerciseInput | SessionExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type SessionExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: SessionExerciseWhereUniqueInput
    update: XOR<SessionExerciseUpdateWithoutExerciseInput, SessionExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<SessionExerciseCreateWithoutExerciseInput, SessionExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type SessionExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: SessionExerciseWhereUniqueInput
    data: XOR<SessionExerciseUpdateWithoutExerciseInput, SessionExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type SessionExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: SessionExerciseScalarWhereInput
    data: XOR<SessionExerciseUpdateManyMutationInput, SessionExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type SessionExerciseScalarWhereInput = {
    AND?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
    OR?: SessionExerciseScalarWhereInput[]
    NOT?: SessionExerciseScalarWhereInput | SessionExerciseScalarWhereInput[]
    id?: StringFilter<"SessionExercise"> | string
    sessionId?: StringFilter<"SessionExercise"> | string
    exerciseId?: StringFilter<"SessionExercise"> | string
  }

  export type SessionExerciseCreateWithoutSetsInput = {
    id?: string
    session: WorkoutSessionCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutSessionExercisesInput
  }

  export type SessionExerciseUncheckedCreateWithoutSetsInput = {
    id?: string
    sessionId: string
    exerciseId: string
  }

  export type SessionExerciseCreateOrConnectWithoutSetsInput = {
    where: SessionExerciseWhereUniqueInput
    create: XOR<SessionExerciseCreateWithoutSetsInput, SessionExerciseUncheckedCreateWithoutSetsInput>
  }

  export type SessionExerciseUpsertWithoutSetsInput = {
    update: XOR<SessionExerciseUpdateWithoutSetsInput, SessionExerciseUncheckedUpdateWithoutSetsInput>
    create: XOR<SessionExerciseCreateWithoutSetsInput, SessionExerciseUncheckedCreateWithoutSetsInput>
    where?: SessionExerciseWhereInput
  }

  export type SessionExerciseUpdateToOneWithWhereWithoutSetsInput = {
    where?: SessionExerciseWhereInput
    data: XOR<SessionExerciseUpdateWithoutSetsInput, SessionExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type SessionExerciseUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutSessionExercisesNestedInput
  }

  export type SessionExerciseUncheckedUpdateWithoutSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutWorkoutInput = {
    id?: string
    name: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    role?: $Enums.UserRole
    type?: $Enums.UserType
  }

  export type UserUncheckedCreateWithoutWorkoutInput = {
    id?: string
    name: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    role?: $Enums.UserRole
    type?: $Enums.UserType
  }

  export type UserCreateOrConnectWithoutWorkoutInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
  }

  export type SessionExerciseCreateWithoutSessionInput = {
    id?: string
    exercise: ExerciseCreateNestedOneWithoutSessionExercisesInput
    sets?: SetLogCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseUncheckedCreateWithoutSessionInput = {
    id?: string
    exerciseId: string
    sets?: SetLogUncheckedCreateNestedManyWithoutSessionExerciseInput
  }

  export type SessionExerciseCreateOrConnectWithoutSessionInput = {
    where: SessionExerciseWhereUniqueInput
    create: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput>
  }

  export type SessionExerciseCreateManySessionInputEnvelope = {
    data: SessionExerciseCreateManySessionInput | SessionExerciseCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutInput = {
    update: XOR<UserUpdateWithoutWorkoutInput, UserUncheckedUpdateWithoutWorkoutInput>
    create: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutInput, UserUncheckedUpdateWithoutWorkoutInput>
  }

  export type UserUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type SessionExerciseUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionExerciseWhereUniqueInput
    update: XOR<SessionExerciseUpdateWithoutSessionInput, SessionExerciseUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionExerciseCreateWithoutSessionInput, SessionExerciseUncheckedCreateWithoutSessionInput>
  }

  export type SessionExerciseUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionExerciseWhereUniqueInput
    data: XOR<SessionExerciseUpdateWithoutSessionInput, SessionExerciseUncheckedUpdateWithoutSessionInput>
  }

  export type SessionExerciseUpdateManyWithWhereWithoutSessionInput = {
    where: SessionExerciseScalarWhereInput
    data: XOR<SessionExerciseUpdateManyMutationInput, SessionExerciseUncheckedUpdateManyWithoutSessionInput>
  }

  export type WorkoutSessionCreateWithoutExercisesInput = {
    id?: string
    date?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutWorkoutInput
  }

  export type WorkoutSessionUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    date?: Date | string
    notes?: string | null
  }

  export type WorkoutSessionCreateOrConnectWithoutExercisesInput = {
    where: WorkoutSessionWhereUniqueInput
    create: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutSessionExercisesInput = {
    id?: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions?: string | null
    createdAt?: Date | string
  }

  export type ExerciseUncheckedCreateWithoutSessionExercisesInput = {
    id?: string
    name: string
    type: $Enums.ExerciseType
    slug: string
    equipment: $Enums.EquipmentType
    instructions?: string | null
    createdAt?: Date | string
  }

  export type ExerciseCreateOrConnectWithoutSessionExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutSessionExercisesInput, ExerciseUncheckedCreateWithoutSessionExercisesInput>
  }

  export type SetLogCreateWithoutSessionExerciseInput = {
    id?: string
    weight: number
    set: number
    rep: number
  }

  export type SetLogUncheckedCreateWithoutSessionExerciseInput = {
    id?: string
    weight: number
    set: number
    rep: number
  }

  export type SetLogCreateOrConnectWithoutSessionExerciseInput = {
    where: SetLogWhereUniqueInput
    create: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput>
  }

  export type SetLogCreateManySessionExerciseInputEnvelope = {
    data: SetLogCreateManySessionExerciseInput | SetLogCreateManySessionExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutSessionUpsertWithoutExercisesInput = {
    update: XOR<WorkoutSessionUpdateWithoutExercisesInput, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutSessionCreateWithoutExercisesInput, WorkoutSessionUncheckedCreateWithoutExercisesInput>
    where?: WorkoutSessionWhereInput
  }

  export type WorkoutSessionUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutSessionWhereInput
    data: XOR<WorkoutSessionUpdateWithoutExercisesInput, WorkoutSessionUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutSessionUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUpsertWithoutSessionExercisesInput = {
    update: XOR<ExerciseUpdateWithoutSessionExercisesInput, ExerciseUncheckedUpdateWithoutSessionExercisesInput>
    create: XOR<ExerciseCreateWithoutSessionExercisesInput, ExerciseUncheckedCreateWithoutSessionExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutSessionExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutSessionExercisesInput, ExerciseUncheckedUpdateWithoutSessionExercisesInput>
  }

  export type ExerciseUpdateWithoutSessionExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateWithoutSessionExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    slug?: StringFieldUpdateOperationsInput | string
    equipment?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetLogUpsertWithWhereUniqueWithoutSessionExerciseInput = {
    where: SetLogWhereUniqueInput
    update: XOR<SetLogUpdateWithoutSessionExerciseInput, SetLogUncheckedUpdateWithoutSessionExerciseInput>
    create: XOR<SetLogCreateWithoutSessionExerciseInput, SetLogUncheckedCreateWithoutSessionExerciseInput>
  }

  export type SetLogUpdateWithWhereUniqueWithoutSessionExerciseInput = {
    where: SetLogWhereUniqueInput
    data: XOR<SetLogUpdateWithoutSessionExerciseInput, SetLogUncheckedUpdateWithoutSessionExerciseInput>
  }

  export type SetLogUpdateManyWithWhereWithoutSessionExerciseInput = {
    where: SetLogScalarWhereInput
    data: XOR<SetLogUpdateManyMutationInput, SetLogUncheckedUpdateManyWithoutSessionExerciseInput>
  }

  export type SetLogScalarWhereInput = {
    AND?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
    OR?: SetLogScalarWhereInput[]
    NOT?: SetLogScalarWhereInput | SetLogScalarWhereInput[]
    id?: StringFilter<"SetLog"> | string
    sessionExerciseId?: StringFilter<"SetLog"> | string
    weight?: FloatFilter<"SetLog"> | number
    set?: IntFilter<"SetLog"> | number
    rep?: IntFilter<"SetLog"> | number
  }

  export type WorkoutSessionCreateManyUserInput = {
    id?: string
    date?: Date | string
    notes?: string | null
  }

  export type WorkoutSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: SessionExerciseUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: SessionExerciseUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WorkoutSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionExerciseCreateManyExerciseInput = {
    id?: string
    sessionId: string
  }

  export type SessionExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: WorkoutSessionUpdateOneRequiredWithoutExercisesNestedInput
    sets?: SetLogUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionExerciseCreateManySessionInput = {
    id?: string
    exerciseId: string
  }

  export type SessionExerciseUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise?: ExerciseUpdateOneRequiredWithoutSessionExercisesNestedInput
    sets?: SetLogUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: SetLogUncheckedUpdateManyWithoutSessionExerciseNestedInput
  }

  export type SessionExerciseUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
  }

  export type SetLogCreateManySessionExerciseInput = {
    id?: string
    weight: number
    set: number
    rep: number
  }

  export type SetLogUpdateWithoutSessionExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateWithoutSessionExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }

  export type SetLogUncheckedUpdateManyWithoutSessionExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    rep?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}