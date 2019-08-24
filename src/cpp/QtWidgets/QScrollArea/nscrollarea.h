#pragma once

#include <QScrollArea>
#include "src/cpp/core/NodeWidget/nodewidget.h"

class NScrollArea: public QScrollArea, public NodeWidget
{
    NODEWIDGET_IMPLEMENTATIONS(QScrollArea)
public:
    using QScrollArea::QScrollArea; //inherit all constructors of QScrollArea
};


