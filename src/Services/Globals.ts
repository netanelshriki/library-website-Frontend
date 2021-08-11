class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        employee:  "http://localhost:8080/lib/employee/",
        borrower: "http://localhost:8080/api/borrower/",
     
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        employee:  "http://localhost:8080/lib/employee/",
        borrower: "http://localhost:8080/api/borrower/",
     
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;