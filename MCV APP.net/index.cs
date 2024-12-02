using System.Web.Mvc;
using System.Web.Routing;

// Namespace for the entire application
namespace CounterApp
{
    // The CounterModel class: Manages the counter value
    public class CounterModel
    {
        public int Count { get; set; }

        public void Increment()
        {
            Count++;
        }

        public void Reset()
        {
            Count = 0;
        }
    }

    // The CounterController class: Handles user interactions
    public class CounterController : Controller
    {
        private static CounterModel _counter = new CounterModel();

        // Action to display the counter
        public ActionResult Index()
        {
            return View(_counter);
        }

        // Action to increment the counter
        public ActionResult Increment()
        {
            _counter.Increment();
            return RedirectToAction("Index");
        }

        // Action to reset the counter
        public ActionResult Reset()
        {
            _counter.Reset();
            return RedirectToAction("Index");
        }
    }

    // RouteConfig class: Configures routes for the application
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Counter", action = "Index", id = UrlParameter.Optional }
            );
        }
    }

    // Global.asax.cs: Application start
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}

