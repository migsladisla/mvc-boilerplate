class CONSTANTS{
    static PORT = class {
        static get HTTP_PORT() {
            return 80;
        }
    
        static get HTTPS_PORT() {
            return 443;
        }
        
        static get LOCALHOST_PORT() {
            return 3000;
        }
    
        static get ACTIVE_PORT() {
            return this.LOCALHOST_PORT;
        }
    }

    static LOREM = class {
        static get LOREM_IPSUM() {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula felis, faucibus eu mauris vitae, porttitor sodales augue.";
        }
    }
    
    // static USER_TYPE = class {
    //     static get DUMMY_USER_TYPE_ADMIN() {
    //         return 0;
    //     }
    //     static get DUMMY_USER_TYPE_GUARD() {
    //         return 1;
    //     }
    //     static get DUMMY_USER_TYPE_TENANT() {
    //         return 2;
    //     }
        
    //     static get USER_TYPE_ADMIN() {
    //         return 0;
    //     }
    //     static get USER_TYPE_GUARD() {
    //         return 1;
    //     }
    //     static get USER_TYPE_TENANT() {
    //         return 2; 
    //     }
    // }
}

module.exports.CONSTANTS = CONSTANTS;