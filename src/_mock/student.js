import account from "./account";

const studentsList =[
    {
        id:1,
        profile_pic: "/assets/images/avatars/avatar_1.jpg",
        username:"DAR/2211/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:2,
        profile_pic: "/assets/images/avatars/avatar_2.jpg",
        username:"DAR/2212/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"banned",
        is_active:false,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:3,
        profile_pic: "/assets/images/avatars/avatar_3.jpg",
        username:"DAR/2213/15",
        religion:'orthodox',
        gender:"Female",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:4,
        profile_pic: "/assets/images/avatars/avatar_4.jpg",
        username:"DAR/2214/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Bahir Dar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:5,
        profile_pic: "/assets/images/avatars/avatar_5.jpg",
        username:"DAR/2215/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:6,
        profile_pic: "/assets/images/avatars/avatar_6.jpg",
        username:"DAR/2216/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:7,
        profile_pic: "/assets/images/avatars/avatar_7.jpg",
        username:"DAR/2217/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:8,
        profile_pic: "/assets/images/avatars/avatar_8.jpg",
        username:"DAR/2218/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:9,
        profile_pic: "/assets/images/avatars/avatar_9.jpg",
        username:"DAR/2219/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:10,
        profile_pic: "/assets/images/avatars/avatar_10.jpg",
        username:"DAR/2220/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:11,
        profile_pic: "/assets/images/avatars/avatar_11.jpg",
        username:"DAR/2221/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:12,
        profile_pic: "/assets/images/avatars/avatar_12.jpg",
        username:"DAR/2222/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:13,
        profile_pic: "/assets/images/avatars/avatar_13.jpg",
        username:"DAR/2223/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:14,
        profile_pic: "/assets/images/avatars/avatar_14.jpg",
        username:"DAR/2224/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:15,
        profile_pic: "/assets/images/avatars/avatar_15.jpg",
        username:"DAR/2225/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:16,
        profile_pic: "/assets/images/avatars/avatar_16.jpg",
        username:"DAR/2226/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        birth_date:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    },
    {
        id:17,
        profile_pic: "/assets/images/avatars/avatar_17.jpg",
        username:"DAR/2227/15",
        religion:'orthodox',
        gender:"male",
        phone:"+2519235678",
        emergency_phone:"+251927882316",
        section:4,
        status:"success",
        is_active:true,
        permanent_address:"Addis Ababa",
        current_address:"Gondar",
        marital_status:"single",
        date_of_birth:"2000-03-12",
        birth_place:"Addis Ababa",
        role:1,
        updated_at:"2023-03-12",
        created_at:"2022-01-23"
    }
]
export default studentsList;
