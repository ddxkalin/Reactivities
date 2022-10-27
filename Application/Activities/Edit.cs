namespace Application.Activities
{
    using AutoMapper;
    using Domain;
    using FluentValidation;
    using MediatR;
    using Persistence;

    public class Edit
    {
        public class Command : IRequest {
            public Activity Acitivity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Acitivity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Acitivity.Id);

                _mapper.Map(request.Acitivity, activity);
                
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}