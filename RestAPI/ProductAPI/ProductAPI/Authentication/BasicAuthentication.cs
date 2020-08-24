using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace ProductAPI.Authentication
{
    public class BasicAuthentication : AuthorizationFilterAttribute
    {
        public BasicAuthentication()
        {
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if(actionContext.Request.Headers.Authorization == null)
            {
                throw new UnauthorizedAccessException();
            }
            else
            {
                string authenticationToken = actionContext.Request.Headers.Authorization.Parameter;
                string decodeAuthToken = Encoding.UTF8.GetString(Convert.FromBase64String(authenticationToken));
                string[] usernamePasswordArray = decodeAuthToken.Split(':');
                string username = usernamePasswordArray[0];
                string password = usernamePasswordArray[1];

                if(username == "api" && password == "pswd")
                {
                    return;
                }
                else
                {
                    throw new UnauthorizedAccessException();
                }
            }
        }
    }
}