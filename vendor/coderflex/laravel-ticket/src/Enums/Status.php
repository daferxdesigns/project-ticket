<?php

namespace Coderflex\LaravelTicket\Enums;

enum Status: string
{
    case OPEN = 'open';
    case CLOSED = 'closed';
    case ONHOLD='on_hold';
    case INPROGRESS='in_progress';
    case ARCHIVED = 'archived';
    case RESOLVED = 'resolved';
}
