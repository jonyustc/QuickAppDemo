using System.Collections.Generic;
using System.Security.Claims;
using DAL;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace QuickAppDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public LoginController(IUnitOfWork unitOfWork)
        {
            _unitOfWork=unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetLogin(string userName,string password)
        {
            var isUserExists=_unitOfWork.Logins.IsValidUser(userName,password);
            if(!isUserExists)
                return BadRequest();

            var user=_unitOfWork.Logins.GetUserNameFromUser(userName);

            var claims=new List<Claim>{
                new Claim(ClaimTypes.Name,user.UserName)
            };

            var identity=new ClaimsIdentity(claims,CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(new ClaimsPrincipal(identity));

            
            
            return Ok(user);
        }

        [HttpGet("/api/logout")]
        public IActionResult GetLogout(){
            HttpContext.Response.Cookies.Delete(".AspNetCore.Cookies");
            return Ok();
        }
    }
}