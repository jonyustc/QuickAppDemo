using AutoMapper;
using DAL.Models;
using QuickAppDemo.ViewModels;

namespace QuickAppDemo
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ToDo,ToDoViewModel>().ReverseMap();
            CreateMap<RegistrationViewModel,UserProfile>();
            CreateMap<RegistrationViewModel,User>()
                .ForMember(dest => dest.UserProfile,opt=>
                opt.MapFrom(src=>src));
        }
    }
}