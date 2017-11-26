function market_contract(direction, expires, maxprice, pubkey, period) {
    var a = string_to_array(atob("AAAAJxAAAAAAAXgA"));
    var b = string_to_array(atob("AAAAAAJ4AA=="));
    var c = string_to_array(atob("AAAAAAN4AA=="));
    var d = string_to_array(atob("AAAAAAR4AgAAAEE="));
    var e = string_to_array(atob("AAAAAAV4AA=="));
    var f;
    if (direction == 1) {
        f = string_to_array(atob("C0hISEhIFEdIM3kDAAAAABAnAAAAIKEHAAAzAAAAAEczeQMAAAAAECcAAACghgEAADJkAAAAADNeMnkGAAAAAHkCAAAAAEY6AAAAAACGFgAAAAMAAAACFBaHAQAAAAAUhyAAAAAAFIMUFoMUFoMUgxQURjoEAAAAABRHM3kDAAAAABAnAAAAMzUCAAAAAHkGAAAAADJeQEIPAAAzXnkCAAAAABQUFBQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AwAAAAAURwAAAAAAMkBCDwAAQEIPAAAAAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFIUFhQWUDp5CwAAAAB5CgAAAAAUFhQWUDofFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAANzUCAAAAAHkGAAAAADMfSBQWRxRGNhkeSBRHFBZGNhkZHxZ4CwAAAAAUFBQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAADp5BAAAAACGFgAAAgAAAAIWhhYAAAIAAAAChwIAAAAAFoYWAAACAAAAAocCAAAAABaHBAAAAAAUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAApeQUAAAAAFxWHCgAAAAAeHngKAAAAABQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AgAAAAAUR0gUFEcyNRAnAAAANDN5CAAAAAAQJwAAADN5AwAAAAAQJwAAADUQJwAAADR5CAAAAAAUFEY6MhYAAAAAAHkDAAAAAHkJAAAAAB8UFjJAQg8AABYeFl4XNEgAAAAAABQURzNGNhleeQIAAAAAGEhISEhHM3kDAAAAABAnAAAAAQAAAAABAAAAABQURjoAAAAAABRHM3kDAAAAABAnAAAAAwAAAAAAAAAAABQURjoDAAAAABRHM3kBAAAAABAnAAAAAwAAAAAAAAAAABQURjoCAAAAABRHeQEAAAAAAwAAAAAAAAAAABQURjoBAAAAAIYWAAAAAwAAAAIUFocBAAAAABSHIAAAAAAUgxQWgxQWgxSDFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAUDZeHhQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFA2MhYAAAAAAHkDAAAAABV4CQAAAAAVeAgAAAAAFBQUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAA6eQQAAAAAhhYAAAIAAAACFoYWAAACAAAAAocCAAAAABaGFgAAAgAAAAKHAgAAAAAWhwQAAAAAFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAKXkFAAAAABcVhwoAAAAAFhQURjoBAAAAABRHAAAAAAAzeQYAAAAAMl5AQg8AAHkGAAAAABQURjoAAAAAABZ4BwAAAADIAAAAAHgGAAAAAA=="));
    } else if (direction == 2) {
        f = string_to_array(atob("C0hISEhIFEdIM3kDAAAAABAnAAAAIKEHAAAzAAAAAEczeQMAAAAAECcAAACghgEAADJkAAAAADNeMnkGAAAAAHkCAAAAAEY6AAAAAACGFgAAAAMAAAACFBaHAQAAAAAUhyAAAAAAFIMUFoMUFoMUgxQURjoEAAAAABRHM3kDAAAAABAnAAAAMzUCAAAAAHkGAAAAADJeQEIPAAAzXnkCAAAAABQUFBQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AwAAAAAURwAAAAAAMkBCDwAAQEIPAAAAAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFIUFhQWUDp5CwAAAAB5CgAAAAAUFhQWUDofFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAANzUCAAAAAHkGAAAAADMfSBQWRxRGNhkeSBRHFBZGNhkZHxZ4CwAAAAAUFBQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAADp5BAAAAACGFgAAAgAAAAIWhhYAAAIAAAAChwIAAAAAFoYWAAACAAAAAocCAAAAABaHBAAAAAAUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAApeQUAAAAAFxWHCgAAAAAeHngKAAAAABQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AgAAAAAUR0gUFEcyNRAnAAAANDN5CAAAAAAQJwAAADN5AwAAAAAQJwAAADUQJwAAADR5CAAAAAAUFEY6MxYQJwAAAHkDAAAAAHkJAAAAAB8UFjJAQg8AABYeFl4XNEgAAAAAABQURzNGNhleeQIAAAAAGEhISEhHM3kDAAAAABAnAAAAAQAAAAABAAAAABQURjoAAAAAABRHM3kDAAAAABAnAAAAAwAAAAAAAAAAABQURjoDAAAAABRHM3kBAAAAABAnAAAAAwAAAAAAAAAAABQURjoCAAAAABRHeQEAAAAAAwAAAAAAAAAAABQURjoBAAAAAIYWAAAAAwAAAAIUFocBAAAAABSHIAAAAAAUgxQWgxQWgxSDFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAUDZeHhQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFA3MxYQJwAAAHkDAAAAABV4CQAAAAAVeAgAAAAAFBQUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAA6eQQAAAAAhhYAAAIAAAACFoYWAAACAAAAAocCAAAAABaGFgAAAgAAAAKHAgAAAAAWhwQAAAAAFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAKXkFAAAAABcVhwoAAAAAFhQURjoBAAAAABRHAAAAAAAzeQYAAAAAMl5AQg8AAHkGAAAAABQURjoAAAAAABZ4BwAAAADIAAAAAHgGAAAAAA=="));
    } else {
        console.log("that is an invalid direction");
        console.log(direction);
        return("invalid direction to bet");
    }
    var g = a.concat(
        integer_to_array(expires, 4)).concat(
            b).concat(
                integer_to_array(maxprice, 4)).concat(
                    c).concat(
                        integer_to_array(oid, 4)).concat(
                            d).concat(
                                pubkey).concat(
                                    e).concat(
                                        integer_to_array(period, 4)).concat(
                                            f);
    return g;
    
}

//direction 1
//AAAAJxAAAAAAAXgA
//expires
//AAAAAAJ4AA==
    //maxprice
//AAAAAAN4AA==
    //oid
//AAAAAAR4AgAAAEE=
//pubkey
//AAAAAAV4AA==
//period
//C0hISEhIFEdIM3kDAAAAABAnAAAAIKEHAAAzAAAAAEczeQMAAAAAECcAAACghgEAADJkAAAAADNeMnkGAAAAAHkCAAAAAEY6AAAAAACGFgAAAAMAAAACFBaHAQAAAAAUhyAAAAAAFIMUFoMUFoMUgxQURjoEAAAAABRHM3kDAAAAABAnAAAAMzUCAAAAAHkGAAAAADJeQEIPAAAzXnkCAAAAABQUFBQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AwAAAAAURwAAAAAAMkBCDwAAQEIPAAAAAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFIUFhQWUDp5CwAAAAB5CgAAAAAUFhQWUDofFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAANzUCAAAAAHkGAAAAADMfSBQWRxRGNhkeSBRHFBZGNhkZHxZ4CwAAAAAUFBQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAADp5BAAAAACGFgAAAgAAAAIWhhYAAAIAAAAChwIAAAAAFoYWAAACAAAAAocCAAAAABaHBAAAAAAUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAApeQUAAAAAFxWHCgAAAAAeHngKAAAAABQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AgAAAAAUR0gUFEcyNRAnAAAANDN5CAAAAAAQJwAAADN5AwAAAAAQJwAAADUQJwAAADR5CAAAAAAUFEY6MhYAAAAAAHkDAAAAAHkJAAAAAB8UFjJAQg8AABYeFl4XNEgAAAAAABQURzNGNhleeQIAAAAAGEhISEhHM3kDAAAAABAnAAAAAQAAAAABAAAAABQURjoAAAAAABRHM3kDAAAAABAnAAAAAwAAAAAAAAAAABQURjoDAAAAABRHM3kBAAAAABAnAAAAAwAAAAAAAAAAABQURjoCAAAAABRHeQEAAAAAAwAAAAAAAAAAABQURjoBAAAAAIYWAAAAAwAAAAIUFocBAAAAABSHIAAAAAAUgxQWgxQWgxSDFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAUDZeHhQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFA2MhYAAAAAAHkDAAAAABV4CQAAAAAVeAgAAAAAFBQUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAA6eQQAAAAAhhYAAAIAAAACFoYWAAACAAAAAocCAAAAABaGFgAAAgAAAAKHAgAAAAAWhwQAAAAAFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAKXkFAAAAABcVhwoAAAAAFhQURjoBAAAAABRHAAAAAAAzeQYAAAAAMl5AQg8AAHkGAAAAABQURjoAAAAAABZ4BwAAAADIAAAAAHgGAAAAAA==


//direction 2
//AAAAAAAAAAAAAXgA
//expires
//AAAAAAJ4AA==
    //maxprice
//AAAAAAN4AA==
    //oid
//AAAAAAR4AgAAAEE=
//pubkey
//AAAAAAV4AA==
//period
//C0hISEhIFEdIM3kDAAAAABAnAAAAIKEHAAAzAAAAAEczeQMAAAAAECcAAACghgEAADJkAAAAADNeMnkGAAAAAHkCAAAAAEY6AAAAAACGFgAAAAMAAAACFBaHAQAAAAAUhyAAAAAAFIMUFoMUFoMUgxQURjoEAAAAABRHM3kDAAAAABAnAAAAMzUCAAAAAHkGAAAAADJeQEIPAAAzXnkCAAAAABQUFBQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AwAAAAAURwAAAAAAMkBCDwAAQEIPAAAAAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFIUFhQWUDp5CwAAAAB5CgAAAAAUFhQWUDofFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAANzUCAAAAAHkGAAAAADMfSBQWRxRGNhkeSBRHFBZGNhkZHxZ4CwAAAAAUFBQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAADp5BAAAAACGFgAAAgAAAAIWhhYAAAIAAAAChwIAAAAAFoYWAAACAAAAAocCAAAAABaHBAAAAAAUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAApeQUAAAAAFxWHCgAAAAAeHngKAAAAABQUFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAOnkEAAAAAIYWAAACAAAAAhaGFgAAAgAAAAKHAgAAAAAWhhYAAAIAAAAChwIAAAAAFocEAAAAABQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAACl5BQAAAAAXFYcKAAAAABQUFEY6AgAAAAAUR0gUFEcyNRAnAAAANDN5CAAAAAAQJwAAADN5AwAAAAAQJwAAADUQJwAAADR5CAAAAAAUFEY6MxYQJwAAAHkDAAAAAHkJAAAAAB8UFjJAQg8AABYeFl4XNEgAAAAAABQURzNGNhleeQIAAAAAGEhISEhHM3kDAAAAABAnAAAAAQAAAAABAAAAABQURjoAAAAAABRHM3kDAAAAABAnAAAAAwAAAAAAAAAAABQURjoDAAAAABRHM3kBAAAAABAnAAAAAwAAAAAAAAAAABQURjoCAAAAABRHeQEAAAAAAwAAAAAAAAAAABQURjoBAAAAAIYWAAAAAwAAAAIUFocBAAAAABSHIAAAAAAUgxQWgxQWgxSDFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAUDZeHhQUSHgHAAAAADIBAAAAAHkHAAAAAEcNeQcAAAAARjoAAAAAAFA3MxYQJwAAAHkDAAAAABV4CQAAAAAVeAgAAAAAFBQUFEh4BwAAAAAyAQAAAAB5BwAAAABHDXkHAAAAAEY6AAAAAAA6eQQAAAAAhhYAAAIAAAACFoYWAAACAAAAAocCAAAAABaGFgAAAgAAAAKHAgAAAAAWhwQAAAAAFBRIeAcAAAAAMgEAAAAAeQcAAAAARw15BwAAAABGOgAAAAAAKXkFAAAAABcVhwoAAAAAFhQURjoBAAAAABRHAAAAAAAzeQYAAAAAMl5AQg8AAHkGAAAAABQURjoAAAAAABZ4BwAAAADIAAAAAHgGAAAAAA==
