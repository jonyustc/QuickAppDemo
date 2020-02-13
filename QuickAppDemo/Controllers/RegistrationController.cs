using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace QuickAppDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RegistrationController(IUnitOfWork unitOfWork,IMapper mapper)
        {
            _unitOfWork= unitOfWork;
            _mapper=mapper;
        }

        [HttpPost]
        public IActionResult PostRegistration(RegistrationViewModel viewModel)
        {
            var userModel=_mapper.Map<RegistrationViewModel,User>(viewModel);
            _unitOfWork.Users.Add(userModel);
            _unitOfWork.SaveChanges();
            return Ok();
        }
    }
}