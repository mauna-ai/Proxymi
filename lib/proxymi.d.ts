declare namespace Proxymi
{
    type Like<T> = { [key in keyof T]: T[key]; };

    type SuperConstructor =
    {
        new (...args: any[]): any;
        prototype: object | null;
    };

    type ClusteredConstructor<T extends SuperConstructor> =
    {
        /**
         * Allows accessing a property or calling a method in a specified base class, eliminating
         * ambiguity when multiple base classes share a property with the same key.
         *
         * @param type
         * The referenced base class.
         */
        class<U extends T>(type: U): U;
    };

    type ClusteredPrototype<T extends SuperConstructor> =
    {
        /**
         * Allows accessing a property or calling a method in a specified base class, eliminating
         * ambiguity when multiple base classes share a property with the same key.
         *
         * @param type
         * The referenced base class.
         */
        class<U extends T>(type: U): InstanceType<U>;
    };

    type SuperConstructorInvokeInfo<T extends SuperConstructor> =
    {
        super: T;
        arguments?: ConstructorParameters<T>;
    };
}

interface ObjectConstructor
{
    /**
     * Returns the list of prototypes of an object.
     *
     * @param o
     * The object that references the prototypes.
     */
    getPrototypeListOf(o: any): any[];
}

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
):
Proxymi.Like<T1>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
    ):
    Proxymi.ClusteredPrototype<T1>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & Proxymi.ClusteredPrototype<T1>
)
&
Proxymi.ClusteredConstructor<T1>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
):
Proxymi.Like<T1 & T2>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & Proxymi.ClusteredPrototype<T1 | T2>
)
&
Proxymi.ClusteredConstructor<T1 | T2>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
):
Proxymi.Like<T1 & T2 & T3>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
):
Proxymi.Like<T1 & T2 & T3 & T4>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
    T6 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
    type6: T6,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5 & T6>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
        args6?: ConstructorParameters<T6>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
            | Proxymi.SuperConstructorInvokeInfo<T6>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & InstanceType<T6>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5 | T6>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
    T6 extends Proxymi.SuperConstructor,
    T7 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
    type6: T6,
    type7: T7,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5 & T6 & T7>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
        args6?: ConstructorParameters<T6>,
        args7?: ConstructorParameters<T7>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
            | Proxymi.SuperConstructorInvokeInfo<T6>
            | Proxymi.SuperConstructorInvokeInfo<T7>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & InstanceType<T6>
    & InstanceType<T7>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
    T6 extends Proxymi.SuperConstructor,
    T7 extends Proxymi.SuperConstructor,
    T8 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
    type6: T6,
    type7: T7,
    type8: T8,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
        args6?: ConstructorParameters<T6>,
        args7?: ConstructorParameters<T7>,
        args8?: ConstructorParameters<T8>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
            | Proxymi.SuperConstructorInvokeInfo<T6>
            | Proxymi.SuperConstructorInvokeInfo<T7>
            | Proxymi.SuperConstructorInvokeInfo<T8>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & InstanceType<T6>
    & InstanceType<T7>
    & InstanceType<T8>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
    T6 extends Proxymi.SuperConstructor,
    T7 extends Proxymi.SuperConstructor,
    T8 extends Proxymi.SuperConstructor,
    T9 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
    type6: T6,
    type7: T7,
    type8: T8,
    type9: T9,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
        args6?: ConstructorParameters<T6>,
        args7?: ConstructorParameters<T7>,
        args8?: ConstructorParameters<T8>,
        args9?: ConstructorParameters<T9>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
            | Proxymi.SuperConstructorInvokeInfo<T6>
            | Proxymi.SuperConstructorInvokeInfo<T7>
            | Proxymi.SuperConstructorInvokeInfo<T8>
            | Proxymi.SuperConstructorInvokeInfo<T9>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & InstanceType<T6>
    & InstanceType<T7>
    & InstanceType<T8>
    & InstanceType<T9>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

/**
 * Allows defining a derived class that inherits from multiple base classes.
 */
declare function classes
<
    T1 extends Proxymi.SuperConstructor,
    T2 extends Proxymi.SuperConstructor,
    T3 extends Proxymi.SuperConstructor,
    T4 extends Proxymi.SuperConstructor,
    T5 extends Proxymi.SuperConstructor,
    T6 extends Proxymi.SuperConstructor,
    T7 extends Proxymi.SuperConstructor,
    T8 extends Proxymi.SuperConstructor,
    T9 extends Proxymi.SuperConstructor,
    T10 extends Proxymi.SuperConstructor,
>
(
    type1: T1,
    type2: T2,
    type3: T3,
    type4: T4,
    type5: T5,
    type6: T6,
    type7: T7,
    type8: T8,
    type9: T9,
    type10: T10,
):
Proxymi.Like<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10>
&
{
    new
    (
        args1?: ConstructorParameters<T1>,
        args2?: ConstructorParameters<T2>,
        args3?: ConstructorParameters<T3>,
        args4?: ConstructorParameters<T4>,
        args5?: ConstructorParameters<T5>,
        args6?: ConstructorParameters<T6>,
        args7?: ConstructorParameters<T7>,
        args8?: ConstructorParameters<T8>,
        args9?: ConstructorParameters<T9>,
        args10?: ConstructorParameters<T10>,
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;

    new
    (
        ...args:
        (
            | Proxymi.SuperConstructorInvokeInfo<T1>
            | Proxymi.SuperConstructorInvokeInfo<T2>
            | Proxymi.SuperConstructorInvokeInfo<T3>
            | Proxymi.SuperConstructorInvokeInfo<T4>
            | Proxymi.SuperConstructorInvokeInfo<T5>
            | Proxymi.SuperConstructorInvokeInfo<T6>
            | Proxymi.SuperConstructorInvokeInfo<T7>
            | Proxymi.SuperConstructorInvokeInfo<T8>
            | Proxymi.SuperConstructorInvokeInfo<T9>
            | Proxymi.SuperConstructorInvokeInfo<T10>
        )[]
    ):
    Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
}
&
(
    new (...args: any[]) =>
    & InstanceType<T1>
    & InstanceType<T2>
    & InstanceType<T3>
    & InstanceType<T4>
    & InstanceType<T5>
    & InstanceType<T6>
    & InstanceType<T7>
    & InstanceType<T8>
    & InstanceType<T9>
    & InstanceType<T10>
    & Proxymi.ClusteredPrototype<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>
)
&
Proxymi.ClusteredConstructor<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
